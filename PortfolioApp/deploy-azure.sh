#!/bin/bash

# Azure App Service Deployment Script for Portfolio App
# Bash script for Linux/Mac users

set -e

# Configuration
RESOURCE_GROUP_NAME=""
APP_SERVICE_NAME=""
LOCATION="East US"
PRICING_TIER="B1"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

# Help function
show_help() {
    echo "Usage: $0 -g RESOURCE_GROUP -a APP_SERVICE_NAME [-l LOCATION] [-p PRICING_TIER]"
    echo ""
    echo "Options:"
    echo "  -g, --resource-group    Azure Resource Group name (required)"
    echo "  -a, --app-service       Azure App Service name (required)"
    echo "  -l, --location          Azure region (default: East US)"
    echo "  -p, --pricing-tier      App Service pricing tier (default: B1)"
    echo "  -h, --help              Show this help message"
    echo ""
    echo "Example:"
    echo "  $0 -g rg-portfolio-app -a raghav-portfolio-app"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -g|--resource-group)
            RESOURCE_GROUP_NAME="$2"
            shift 2
            ;;
        -a|--app-service)
            APP_SERVICE_NAME="$2"
            shift 2
            ;;
        -l|--location)
            LOCATION="$2"
            shift 2
            ;;
        -p|--pricing-tier)
            PRICING_TIER="$2"
            shift 2
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
done

# Check required parameters
if [[ -z "$RESOURCE_GROUP_NAME" || -z "$APP_SERVICE_NAME" ]]; then
    print_error "Resource group name and app service name are required"
    show_help
    exit 1
fi

echo "🚀 Starting Azure App Service deployment for Portfolio App"
print_info "Configuration:"
echo "  Resource Group: $RESOURCE_GROUP_NAME"
echo "  App Service: $APP_SERVICE_NAME"
echo "  Location: $LOCATION"
echo "  Pricing Tier: $PRICING_TIER"
echo ""

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    print_error "Azure CLI is not installed. Please install from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi
print_status "Azure CLI is installed"

# Check if .NET is installed
if ! command -v dotnet &> /dev/null; then
    print_error ".NET SDK is not installed. Please install .NET 8 SDK"
    exit 1
fi
print_status ".NET SDK is installed"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+"
    exit 1
fi
print_status "Node.js is installed"

# Check if Angular CLI is installed
if ! command -v ng &> /dev/null; then
    print_warning "Angular CLI not found. Installing globally..."
    npm install -g @angular/cli@17
fi
print_status "Angular CLI is available"

# Check Azure login
if ! az account show &> /dev/null; then
    print_warning "Please login to Azure..."
    az login
fi
print_status "Azure login verified"

# Create Resource Group
print_info "Creating resource group..."
az group create --name "$RESOURCE_GROUP_NAME" --location "$LOCATION"
print_status "Resource group created: $RESOURCE_GROUP_NAME"

# Create App Service Plan
APP_SERVICE_PLAN="$APP_SERVICE_NAME-plan"
print_info "Creating App Service Plan..."
az appservice plan create \
    --name "$APP_SERVICE_PLAN" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --sku "$PRICING_TIER" \
    --is-linux
print_status "App Service Plan created: $APP_SERVICE_PLAN"

# Create Web App
print_info "Creating Web App..."
az webapp create \
    --name "$APP_SERVICE_NAME" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --plan "$APP_SERVICE_PLAN" \
    --runtime "DOTNETCORE:8.0"
print_status "Web App created: $APP_SERVICE_NAME"

# Configure App Settings
print_info "Configuring app settings..."
az webapp config appsettings set \
    --name "$APP_SERVICE_NAME" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --settings ASPNETCORE_ENVIRONMENT=Production WEBSITE_RUN_FROM_PACKAGE=1
print_status "App settings configured"

# Build and Deploy Application
print_info "Building application..."

# Restore .NET packages
print_info "Restoring .NET packages..."
dotnet restore

# Install Angular dependencies
print_info "Installing Angular dependencies..."
cd ClientApp
npm install

# Build Angular app
print_info "Building Angular application..."
ng build --configuration=production
cd ..

# Publish .NET app
print_info "Publishing .NET application..."
dotnet publish -c Release -o ./publish

# Create deployment package
print_info "Creating deployment package..."
cd publish
zip -r ../publish.zip .
cd ..

# Deploy to Azure
print_info "Deploying to Azure App Service..."
az webapp deployment source config-zip \
    --name "$APP_SERVICE_NAME" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --src ./publish.zip

APP_URL="https://$APP_SERVICE_NAME.azurewebsites.net"
print_status "Application deployed successfully!"
echo ""
echo "🎉 Your portfolio is now live at: $APP_URL"
echo ""
print_info "Next steps:"
echo "  1. Visit your site: $APP_URL"
echo "  2. Configure custom domain (optional)"
echo "  3. Set up SSL certificate (free with App Service)"
echo "  4. Monitor application logs in Azure portal"
echo ""

# Cleanup
print_info "Cleaning up temporary files..."
rm -rf ./publish
rm -f ./publish.zip

echo "🎉 Deployment completed successfully!"
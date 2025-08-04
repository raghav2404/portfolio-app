#!/bin/bash

# Prepare Portfolio App for Azure Portal Upload
# This script builds and packages your app for manual portal deployment

set -e

OUTPUT_PATH="./azure-deploy-package"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

print_error() {
    echo -e "${RED}❌${NC} $1"
}

print_info() {
    echo -e "${YELLOW}ℹ️${NC} $1"
}

echo "📦 Preparing Portfolio App for Azure Portal Upload"
echo "Output directory: $OUTPUT_PATH"
echo ""

# Clean previous builds
print_warning "Cleaning previous builds..."
rm -rf "$OUTPUT_PATH" ./publish ./azure-deploy.zip 2>/dev/null || true

# Check prerequisites
if ! command -v dotnet &> /dev/null; then
    print_error ".NET SDK not found. Please install .NET 8 SDK"
    exit 1
fi

if ! command -v node &> /dev/null; then
    print_error "Node.js not found. Please install Node.js 18+"
    exit 1
fi

if ! command -v ng &> /dev/null; then
    print_warning "Angular CLI not found. Installing..."
    npm install -g @angular/cli@17
fi

# Restore .NET packages
print_warning "Restoring .NET packages..."
dotnet restore

# Install Angular dependencies
print_warning "Installing Angular dependencies..."
cd ClientApp
npm install
print_status "Angular dependencies installed"

# Build Angular application
print_warning "Building Angular application..."
ng build --configuration=production
print_status "Angular application built"
cd ..

# Publish .NET application
print_warning "Publishing .NET application..."
dotnet publish -c Release -o "./publish"
print_status ".NET application published"

# Create deployment package directory
print_warning "Creating deployment package..."
mkdir -p "$OUTPUT_PATH"

# Copy published files
cp -r ./publish/* "$OUTPUT_PATH/"

# Create zip file for upload
print_warning "Creating zip file for upload..."
cd "$OUTPUT_PATH"
zip -r ../azure-deploy.zip .
cd ..

# Display file info
ZIP_SIZE=$(du -h azure-deploy.zip | cut -f1)
FILE_COUNT=$(find "$OUTPUT_PATH" -type f | wc -l)

print_status "Package prepared successfully!"
echo ""
echo "📊 Package Information:"
echo "  Package location: $(pwd)/azure-deploy.zip"
echo "  Package size: $ZIP_SIZE"
echo "  Files included: $FILE_COUNT files"
echo ""

print_info "Next Steps for Azure Portal Deployment:"
echo "1. Go to portal.azure.com"
echo "2. Create a new Web App (.NET 8 runtime)"
echo "3. Go to Advanced Tools → Kudu"
echo "4. Navigate to Tools → Zip Push Deploy"
echo "5. Upload: azure-deploy.zip"
echo ""
print_status "Detailed instructions available in: AZURE_PORTAL_DEPLOYMENT.md"

# Cleanup
rm -rf ./publish

print_status "Ready for Azure Portal deployment!"
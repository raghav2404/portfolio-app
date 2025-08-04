# Azure App Service Deployment Script for Portfolio App
# PowerShell script for Windows users

param(
    [Parameter(Mandatory=$true)]
    [string]$ResourceGroupName,
    
    [Parameter(Mandatory=$true)]
    [string]$AppServiceName,
    
    [Parameter(Mandatory=$false)]
    [string]$Location = "East US",
    
    [Parameter(Mandatory=$false)]
    [string]$PricingTier = "B1"
)

# Colors for output
$Green = [System.ConsoleColor]::Green
$Red = [System.ConsoleColor]::Red
$Yellow = [System.ConsoleColor]::Yellow

function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

Write-ColorOutput $Green "Starting Azure App Service deployment for Portfolio App"
Write-ColorOutput $Yellow "Configuration:"
Write-Output "  Resource Group: $ResourceGroupName"
Write-Output "  App Service: $AppServiceName"
Write-Output "  Location: $Location"
Write-Output "  Pricing Tier: $PricingTier"

# Check if Azure CLI is installed
try {
    az --version | Out-Null
    Write-ColorOutput $Green "✓ Azure CLI is installed"
} catch {
    Write-ColorOutput $Red "✗ Azure CLI is not installed. Please install from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
}

# Login check
$loginCheck = az account show 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput $Yellow "Please login to Azure..."
    az login
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput $Red "✗ Azure login failed"
        exit 1
    }
}

Write-ColorOutput $Green "✓ Azure login verified"

# Create Resource Group
Write-ColorOutput $Yellow "Creating resource group..."
az group create --name $ResourceGroupName --location $Location
if ($LASTEXITCODE -eq 0) {
    Write-ColorOutput $Green "✓ Resource group created: $ResourceGroupName"
} else {
    Write-ColorOutput $Red "✗ Failed to create resource group"
    exit 1
}

# Create App Service Plan
$AppServicePlan = "$AppServiceName-plan"
Write-ColorOutput $Yellow "Creating App Service Plan..."
az appservice plan create --name $AppServicePlan --resource-group $ResourceGroupName --sku $PricingTier --is-linux
if ($LASTEXITCODE -eq 0) {
    Write-ColorOutput $Green "✓ App Service Plan created: $AppServicePlan"
} else {
    Write-ColorOutput $Red "✗ Failed to create App Service Plan"
    exit 1
}

# Create Web App
Write-ColorOutput $Yellow "Creating Web App..."
az webapp create --name $AppServiceName --resource-group $ResourceGroupName --plan $AppServicePlan --runtime "DOTNETCORE:8.0"
if ($LASTEXITCODE -eq 0) {
    Write-ColorOutput $Green "✓ Web App created: $AppServiceName"
} else {
    Write-ColorOutput $Red "✗ Failed to create Web App"
    exit 1
}

# Configure App Settings
Write-ColorOutput $Yellow "Configuring app settings..."
az webapp config appsettings set --name $AppServiceName --resource-group $ResourceGroupName --settings ASPNETCORE_ENVIRONMENT=Production
az webapp config appsettings set --name $AppServiceName --resource-group $ResourceGroupName --settings WEBSITE_RUN_FROM_PACKAGE=1

Write-ColorOutput $Green "✓ App settings configured"

# Build and Deploy Application
Write-ColorOutput $Yellow "Building application..."

# Restore .NET packages
Write-ColorOutput $Yellow "Restoring .NET packages..."
dotnet restore
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput $Red "✗ Failed to restore .NET packages"
    exit 1
}

# Install Angular dependencies
Write-ColorOutput $Yellow "Installing Angular dependencies..."
Set-Location ClientApp
npm install
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput $Red "✗ Failed to install Angular dependencies"
    Set-Location ..
    exit 1
}

# Build Angular app
Write-ColorOutput $Yellow "Building Angular application..."
ng build --configuration=production
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput $Red "✗ Failed to build Angular application"
    Set-Location ..
    exit 1
}

Set-Location ..

# Publish .NET app
Write-ColorOutput $Yellow "Publishing .NET application..."
dotnet publish -c Release -o ./publish
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput $Red "✗ Failed to publish .NET application"
    exit 1
}

# Create deployment package
Write-ColorOutput $Yellow "Creating deployment package..."
Compress-Archive -Path ./publish/* -DestinationPath ./publish.zip -Force

# Deploy to Azure
Write-ColorOutput $Yellow "Deploying to Azure App Service..."
az webapp deployment source config-zip --name $AppServiceName --resource-group $ResourceGroupName --src ./publish.zip
if ($LASTEXITCODE -eq 0) {
    Write-ColorOutput $Green "✓ Application deployed successfully!"
    
    $AppUrl = "https://$AppServiceName.azurewebsites.net"
    Write-ColorOutput $Green "🚀 Your portfolio is now live at: $AppUrl"
    
    Write-ColorOutput $Yellow "Next steps:"
    Write-Output "  1. Visit your site: $AppUrl"
    Write-Output "  2. Configure custom domain (optional)"
    Write-Output "  3. Set up SSL certificate (free with App Service)"
    Write-Output "  4. Monitor application logs in Azure portal"
    
} else {
    Write-ColorOutput $Red "✗ Deployment failed"
    Write-ColorOutput $Yellow "Check the logs with: az webapp log tail --name $AppServiceName --resource-group $ResourceGroupName"
    exit 1
}

# Cleanup
Write-ColorOutput $Yellow "Cleaning up temporary files..."
Remove-Item ./publish -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item ./publish.zip -Force -ErrorAction SilentlyContinue

Write-ColorOutput $Green "🎉 Deployment completed successfully!"
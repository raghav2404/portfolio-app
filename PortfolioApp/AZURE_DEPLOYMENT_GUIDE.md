# Azure App Service Deployment Guide

## Overview
This guide will help you deploy your Angular + .NET 8 portfolio to Azure App Service using your Azure subscription.

## Prerequisites
- Azure subscription with appropriate permissions
- Azure CLI installed locally
- .NET 8 SDK installed
- Node.js 18+ installed

## Deployment Options

### Option 1: Visual Studio Code with Azure Extensions (Recommended)
1. Install Azure App Service extension in VS Code
2. Sign in to your Azure account
3. Right-click on PortfolioApp folder → "Deploy to Web App"
4. Follow the prompts to create new App Service

### Option 2: Azure CLI Deployment

#### Step 1: Install Azure CLI
```bash
# Install Azure CLI (if not already installed)
# Windows: Download from https://aka.ms/installazurecliwindows
# Mac: brew install azure-cli
# Linux: curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

#### Step 2: Login and Setup
```bash
# Login to Azure
az login

# Set your subscription (replace with your subscription ID)
az account set --subscription "your-subscription-id"

# Create resource group (choose your preferred location)
az group create --name "rg-portfolio-app" --location "East US"
```

#### Step 3: Create App Service Plan
```bash
# Create App Service Plan (B1 Basic tier for cost efficiency)
az appservice plan create \
  --name "plan-portfolio-app" \
  --resource-group "rg-portfolio-app" \
  --sku B1 \
  --is-linux
```

#### Step 4: Create Web App
```bash
# Create Web App with .NET 8 runtime
az webapp create \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app" \
  --plan "plan-portfolio-app" \
  --runtime "DOTNETCORE:8.0"
```

#### Step 5: Configure App Settings
```bash
# Set environment to Production
az webapp config appsettings set \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app" \
  --settings ASPNETCORE_ENVIRONMENT=Production

# Configure startup command (if needed)
az webapp config set \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app" \
  --startup-file "dotnet PortfolioApp.dll"
```

#### Step 6: Deploy Application
```bash
# Navigate to your project directory
cd PortfolioApp

# Create deployment package
dotnet publish -c Release -o ./publish

# Deploy using zip deployment
az webapp deployment source config-zip \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app" \
  --src "./publish.zip"
```

### Option 3: GitHub Actions CI/CD (Continuous Deployment)

Create `.github/workflows/azure-deploy.yml` in your repository root:

```yaml
name: Deploy to Azure App Service

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET 8
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '8.0.x'
        
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install Angular CLI
      run: npm install -g @angular/cli
        
    - name: Restore dependencies
      run: dotnet restore
      working-directory: ./PortfolioApp
      
    - name: Build Angular app
      run: |
        cd PortfolioApp/ClientApp
        npm install
        ng build --configuration=production
        
    - name: Build .NET app
      run: dotnet build --configuration Release --no-restore
      working-directory: ./PortfolioApp
      
    - name: Publish .NET app
      run: dotnet publish -c Release -o ./publish
      working-directory: ./PortfolioApp
      
    - name: Deploy to Azure App Service
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'raghav-portfolio-app'
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: './PortfolioApp/publish'
```

## Database Configuration

### For Production: Azure SQL Database

#### Create Azure SQL Database
```bash
# Create SQL Server
az sql server create \
  --name "sql-portfolio-server" \
  --resource-group "rg-portfolio-app" \
  --location "East US" \
  --admin-user "sqladmin" \
  --admin-password "YourSecurePassword123!"

# Create SQL Database
az sql db create \
  --name "portfolio-db" \
  --server "sql-portfolio-server" \
  --resource-group "rg-portfolio-app" \
  --service-objective S0
```

#### Update Connection String
```bash
# Set connection string in App Service
az webapp config connection-string set \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app" \
  --connection-string-type SQLServer \
  --settings DefaultConnection="Server=tcp:sql-portfolio-server.database.windows.net,1433;Initial Catalog=portfolio-db;Persist Security Info=False;User ID=sqladmin;Password=YourSecurePassword123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
```

### For Development: Keep In-Memory Database
The current setup uses in-memory database which is perfect for demonstration purposes.

## Cost Optimization

### Recommended Azure Resources for Portfolio:
- **App Service Plan**: B1 Basic (~$13/month)
- **SQL Database**: Basic tier (~$5/month) - Optional
- **Storage Account**: Standard LRS (~$1/month) - For static assets if needed

### Cost-Saving Tips:
1. Use B1 Basic tier instead of Standard
2. Stop/start App Service when not actively showcasing
3. Use in-memory database for demo purposes
4. Consider Azure for Students if eligible

## Domain Configuration (Optional)

### Custom Domain Setup:
1. Purchase domain from provider (GoDaddy, Namecheap, etc.)
2. In Azure portal, go to App Service → Custom domains
3. Add custom domain and verify ownership
4. Configure SSL certificate (free with App Service Managed Certificate)

## Monitoring and Troubleshooting

### View Application Logs:
```bash
# Stream logs in real-time
az webapp log tail \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app"

# Download logs
az webapp log download \
  --name "raghav-portfolio-app" \
  --resource-group "rg-portfolio-app"
```

### Application Insights (Optional):
- Enable Application Insights for performance monitoring
- Track user interactions and application performance
- Monitor API response times and error rates

## Security Considerations

1. **HTTPS**: Enabled by default on App Service
2. **Authentication**: Consider Azure AD integration for admin features
3. **API Keys**: Store sensitive data in Azure Key Vault
4. **CORS**: Already configured for your domain

## Step-by-Step Quick Deploy

1. **Prepare locally:**
   ```bash
   cd PortfolioApp
   dotnet restore
   cd ClientApp && npm install && cd ..
   dotnet build --configuration Release
   ```

2. **Create Azure resources:**
   - Resource Group: `rg-portfolio-app`
   - App Service Plan: `plan-portfolio-app` (B1 Basic)
   - Web App: `raghav-portfolio-app`

3. **Deploy:**
   - Use VS Code Azure extension (easiest)
   - Or use Azure CLI commands above
   - Or set up GitHub Actions for CI/CD

4. **Access your site:**
   - URL: `https://raghav-portfolio-app.azurewebsites.net`
   - Custom domain (optional): Configure after deployment

## Troubleshooting Common Issues

### Issue: Angular routing not working
**Solution:** Ensure web.config or .htaccess is configured for SPA routing

### Issue: API calls failing
**Solution:** Check CORS configuration and ensure API base URL is correct

### Issue: Build failures
**Solution:** Verify Node.js and .NET versions match Azure App Service

### Issue: Database connection errors
**Solution:** Check connection string and firewall rules for Azure SQL

Would you like me to proceed with any specific deployment method or need help with Azure resource creation?
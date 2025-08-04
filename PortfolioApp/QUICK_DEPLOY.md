# Quick Azure Deployment Guide

## 🚀 Three Easy Ways to Deploy Your Portfolio

### Option 1: One-Click PowerShell Script (Windows)
```powershell
cd PortfolioApp
.\deploy-azure.ps1 -ResourceGroupName "rg-portfolio-app" -AppServiceName "raghav-portfolio-app"
```

### Option 2: One-Click Bash Script (Linux/Mac)
```bash
cd PortfolioApp
./deploy-azure.sh -g rg-portfolio-app -a raghav-portfolio-app
```

### Option 3: VS Code Azure Extension (Easiest)
1. Install "Azure App Service" extension in VS Code
2. Sign in to your Azure account (Ctrl+Shift+P → "Azure: Sign In")
3. Right-click on `PortfolioApp` folder
4. Select "Deploy to Web App..."
5. Follow the prompts to create new resources

## ⚡ Prerequisites (One-time setup)
```bash
# Install Azure CLI
# Windows: Download from https://aka.ms/installazurecliwindows
# Mac: brew install azure-cli
# Linux: curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login to Azure
az login

# Verify your subscription
az account show
```

## 💰 Cost Estimate
- **App Service (B1 Basic)**: ~$13/month
- **Total monthly cost**: ~$13/month
- **Free tier**: Available for 12 months with new Azure accounts

## 🎯 After Deployment
Your portfolio will be live at:
```
https://[your-app-name].azurewebsites.net
```

Example: `https://raghav-portfolio-app.azurewebsites.net`

## 🔧 Troubleshooting

### Common Issues:
1. **App name already exists**: Change the app name to something unique
2. **Build errors**: Ensure .NET 8 and Node.js 18+ are installed
3. **Permission errors**: Check Azure subscription permissions

### View Logs:
```bash
az webapp log tail --name your-app-name --resource-group your-resource-group
```

## 📋 What Gets Created
- Resource Group: Container for all resources
- App Service Plan: Hosting plan (B1 Basic tier)
- App Service: Your web application host
- Auto-configured: HTTPS, health checks, monitoring

## 🔄 Continuous Deployment (Optional)
Set up GitHub Actions for automatic deployment on code changes:
1. Fork/clone your repository to GitHub
2. In Azure portal, go to your App Service → Deployment Center
3. Connect to GitHub and select your repository
4. Azure will automatically create the workflow file

Ready to deploy? Choose your preferred method above! 🚀
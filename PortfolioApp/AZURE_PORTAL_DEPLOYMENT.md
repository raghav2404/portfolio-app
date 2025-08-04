# Deploy from Azure Portal - Step by Step Guide

## Overview
Deploy your Angular + .NET 8 portfolio directly from Azure Portal using the web interface.

## Step 1: Create App Service from Azure Portal

### 1.1 Access Azure Portal
1. Go to [portal.azure.com](https://portal.azure.com)
2. Sign in with your Azure account

### 1.2 Create App Service
1. Click **"Create a resource"** (+ icon)
2. Search for **"Web App"** and select it
3. Click **"Create"**

### 1.3 Configure Basic Settings
**Subscription**: Select your Azure subscription
**Resource Group**: 
- Create new: `rg-portfolio-app`
- Or use existing

**Instance Details**:
- **Name**: `raghav-portfolio-app` (must be globally unique)
- **Publish**: Code
- **Runtime stack**: .NET 8 (LTS)
- **Operating System**: Linux (recommended for cost)
- **Region**: East US (or your preferred region)

**App Service Plan**:
- Click **"Create new"**
- **Name**: `plan-portfolio-app`
- **Pricing tier**: 
  - Click **"Change size"**
  - Select **"Basic B1"** (~$13/month)
  - Click **"Apply"**

### 1.4 Review and Create
1. Click **"Review + create"**
2. Review your settings
3. Click **"Create"**
4. Wait for deployment to complete (2-3 minutes)

## Step 2: Configure Deployment

### 2.1 Access Deployment Center
1. Go to your newly created App Service
2. In the left menu, click **"Deployment Center"**

### 2.2 Choose Deployment Source

**Option A: GitHub (Recommended for Continuous Deployment)**
1. Select **"GitHub"**
2. Click **"Authorize"** and sign in to GitHub
3. Select:
   - **Organization**: Your GitHub username
   - **Repository**: Your portfolio repository
   - **Branch**: main (or master)
4. Click **"Save"**

**Option B: Local Git**
1. Select **"Local Git"**
2. Click **"Save"**
3. Note the Git clone URL provided

**Option C: External Git**
1. Select **"External Git"**
2. Enter your repository URL
3. Set branch to **"main"**
4. Click **"Save"**

## Step 3: Configure Build Settings

### 3.1 Application Settings
1. Go to **"Configuration"** in the left menu
2. Click **"Application settings"** tab
3. Add these settings:

**Required Settings**:
```
ASPNETCORE_ENVIRONMENT = Production
WEBSITE_RUN_FROM_PACKAGE = 1
SCM_DO_BUILD_DURING_DEPLOYMENT = true
```

**Angular Build Settings**:
```
WEBSITE_NODE_DEFAULT_VERSION = 18.17.0
PRE_BUILD_COMMAND = cd ClientApp && npm install
PRE_BUILD_SCRIPT_PATH = ClientApp/prebuild.sh
```

4. Click **"Save"**

### 3.2 Startup Command (if needed)
1. Go to **"Configuration"** → **"General settings"**
2. **Startup Command**: `dotnet PortfolioApp.dll`
3. Click **"Save"**

## Step 4: Deploy Your Code

### Method A: Direct Upload (Zip Deploy)

#### 4.1 Prepare Your Code
1. Open command prompt/terminal in your project folder
2. Run these commands:

```bash
# Navigate to PortfolioApp
cd PortfolioApp

# Restore packages
dotnet restore

# Install Angular dependencies
cd ClientApp
npm install

# Build Angular app
ng build --configuration=production
cd ..

# Publish .NET app
dotnet publish -c Release -o ./publish

# Create zip file
# Windows: Use File Explorer to zip the 'publish' folder
# Mac/Linux: zip -r publish.zip publish/
```

#### 4.2 Upload via Portal
1. In Azure Portal, go to your App Service
2. Click **"Advanced Tools"** in left menu
3. Click **"Go"** (opens Kudu)
4. Go to **"Tools"** → **"Zip Push Deploy"**
5. Drag your `publish.zip` file to upload
6. Wait for deployment to complete

### Method B: GitHub Actions (Automatic)

If you selected GitHub in Step 2.2, Azure automatically creates a workflow file:

#### 4.1 Review GitHub Workflow
1. Go to your GitHub repository
2. Check `.github/workflows/` folder for the auto-generated workflow
3. The workflow will automatically trigger on pushes to main branch

#### 4.2 Monitor Deployment
1. In Azure Portal, go to **"Deployment Center"**
2. View deployment history and logs
3. Check GitHub Actions tab in your repository

## Step 5: Configure Custom Domain (Optional)

### 5.1 Add Custom Domain
1. Go to **"Custom domains"** in left menu
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow verification instructions
5. Add DNS records at your domain provider

### 5.2 Configure SSL
1. Go to **"TLS/SSL settings"**
2. Click **"Private Key Certificates (.pfx)"**
3. Select **"Create App Service Managed Certificate"**
4. Choose your custom domain
5. Click **"Create"**

## Step 6: Monitor and Troubleshoot

### 6.1 View Application Logs
1. Go to **"Log stream"** for real-time logs
2. Or go to **"Logs"** → **"App Service logs"**
3. Enable application logging if needed

### 6.2 Application Insights (Optional)
1. Go to **"Application Insights"**
2. Click **"Turn on Application Insights"**
3. Configure monitoring and alerting

### 6.3 Check Application Health
1. Go to **"Resource health"**
2. Monitor availability and performance
3. Set up alerts for downtime

## Step 7: Final Verification

### 7.1 Test Your Application
1. Go to **"Overview"** page
2. Click the **URL** (e.g., https://raghav-portfolio-app.azurewebsites.net)
3. Verify all sections work:
   - Navigation
   - Contact form
   - Responsive design

### 7.2 Performance Testing
1. Test on mobile devices
2. Check loading speeds
3. Verify SSL certificate

## Troubleshooting Common Issues

### Issue: Build Failures
**Solution**: 
1. Check build logs in **"Deployment Center"**
2. Verify Node.js and .NET versions in **"Configuration"**
3. Ensure package.json and .csproj files are correct

### Issue: 500 Internal Server Error
**Solution**:
1. Check application logs in **"Log stream"**
2. Verify **"Startup Command"** in **"Configuration"**
3. Check environment variables

### Issue: Angular Routes Not Working
**Solution**:
1. Ensure web.config is deployed with URL rewriting rules
2. Check if Angular build output is in correct wwwroot folder

### Issue: Contact Form Not Working
**Solution**:
1. Check API endpoints are accessible
2. Verify CORS configuration in .NET app
3. Test API endpoints directly

## Cost Management

### Monitor Spending
1. Go to **"Cost Management + Billing"**
2. Set up budget alerts
3. Monitor daily costs

### Scale Down for Development
1. Go to **"Scale up (App Service plan)"**
2. Choose **"Dev/Test"** → **"F1 Free"** for testing
3. Scale back to **"B1 Basic"** for production

## Next Steps After Deployment

1. **Set up monitoring**: Configure Application Insights
2. **Backup strategy**: Set up automated backups
3. **CI/CD optimization**: Fine-tune GitHub Actions workflow
4. **Performance optimization**: Enable CDN for static assets
5. **Security**: Configure authentication if needed

Your portfolio is now live! Visit your URL to see it in action.
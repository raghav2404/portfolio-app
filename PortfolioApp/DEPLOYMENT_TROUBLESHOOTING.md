# Azure Deployment Troubleshooting Guide

## Issue: Azure Default App Instead of Your Website

### Problem
Your Azure App Service shows the default Azure welcome page instead of your Angular + .NET portfolio.

### Root Causes & Solutions

#### 1. **GitHub Actions Build Failure**
**Symptoms**: Build fails with "Specify a project or solution file"

**Solution**: Updated GitHub Actions workflow to specify the correct project file:
```yaml
# Fixed commands in workflow:
dotnet restore PortfolioApp.csproj
dotnet build PortfolioApp.csproj --configuration Release
dotnet publish PortfolioApp.csproj -c Release -o ./publish
```

#### 2. **Incorrect Build Order**
**Problem**: Angular build happens after .NET publish

**Solution**: Build Angular first, then .NET (already fixed in workflow):
1. Install Angular CLI
2. Install Node dependencies
3. Build Angular app (`ng build --production`)
4. Restore .NET packages
5. Build and publish .NET app

#### 3. **Missing Startup Configuration**
**Check**: In Azure Portal → Configuration → General Settings:
- **Startup Command**: Should be empty (auto-detected) or `dotnet PortfolioApp.dll`

#### 4. **Wrong Application Settings**
**Required Settings** in Azure Portal → Configuration → Application Settings:
```
ASPNETCORE_ENVIRONMENT = Production
WEBSITE_RUN_FROM_PACKAGE = 1
SCM_DO_BUILD_DURING_DEPLOYMENT = true
WEBSITE_NODE_DEFAULT_VERSION = 18.17.0
```

## Quick Fix Steps

### Step 1: Re-trigger GitHub Actions
1. Go to your GitHub repository
2. Actions tab → Select failed workflow
3. Click "Re-run all jobs"

### Step 2: Check Build Logs
In GitHub Actions, look for:
- ✅ Angular build successful
- ✅ .NET restore successful  
- ✅ .NET publish successful
- ✅ Deployment successful

### Step 3: Verify Azure Configuration
In Azure Portal → Your App Service:
1. **Configuration** → Check application settings above
2. **Deployment Center** → Verify GitHub connection
3. **Log stream** → Check for runtime errors

### Step 4: Manual Verification
Test the deployment manually:
```bash
# In your local PortfolioApp directory:
cd ClientApp
npm install
ng build --configuration=production
cd ..
dotnet restore PortfolioApp.csproj
dotnet publish PortfolioApp.csproj -c Release -o ./test-publish

# Check if files exist:
# ./test-publish/PortfolioApp.dll (main app)
# ./test-publish/wwwroot/index.html (Angular app)
```

## Common Issues & Fixes

### Issue: "Cannot find project file"
**Fix**: Ensure GitHub Actions workflow specifies `PortfolioApp.csproj` explicitly

### Issue: "Angular build fails"
**Fix**: Check Node.js version in workflow (should be 18.x)

### Issue: "404 errors for API calls"
**Fix**: Verify CORS configuration in Program.cs

### Issue: "Static files not served"
**Fix**: Check `app.UseStaticFiles()` and `app.UseFallback()` in Program.cs

## Deployment Verification Checklist

After deployment, verify:
- [ ] GitHub Actions completed successfully
- [ ] Azure shows "Running" status
- [ ] Website loads (not Azure default page)
- [ ] Navigation menu works
- [ ] Contact form submits successfully
- [ ] Responsive design works on mobile

## Emergency Recovery

If deployment is completely broken:

### Option 1: Redeploy with Fixed Workflow
1. Push code with updated workflow
2. Monitor GitHub Actions
3. Check Azure deployment logs

### Option 2: Manual Zip Deploy
1. Build locally using troubleshooting commands above
2. Zip the `test-publish` folder
3. Deploy via Azure Portal → Advanced Tools → Kudu → Zip Push Deploy

### Option 3: Start Fresh
1. Delete current App Service
2. Create new App Service with correct settings
3. Reconnect to GitHub with fixed workflow

## Monitor Deployment

### GitHub Actions Logs
Check each step completion:
- Checkout code ✅
- Setup .NET ✅  
- Setup Node.js ✅
- Install Angular CLI ✅
- Restore .NET dependencies ✅
- Install Node dependencies ✅
- Build Angular application ✅
- Build .NET application ✅
- Publish .NET application ✅
- Deploy to Azure ✅

### Azure Deployment Logs
In Azure Portal → Deployment Center → Logs:
- Build process completion
- File deployment status
- Startup success/errors

Your deployment should now work correctly with the fixed GitHub Actions workflow!
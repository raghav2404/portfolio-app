# Prepare Portfolio App for Azure Portal Upload
# This script builds and packages your app for manual portal deployment

param(
    [Parameter(Mandatory=$false)]
    [string]$OutputPath = "./azure-deploy-package"
)

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

Write-ColorOutput $Green "📦 Preparing Portfolio App for Azure Portal Upload"
Write-Output "Output directory: $OutputPath"
Write-Output ""

try {
    # Clean previous builds
    Write-ColorOutput $Yellow "🧹 Cleaning previous builds..."
    if (Test-Path $OutputPath) {
        Remove-Item $OutputPath -Recurse -Force
    }
    if (Test-Path "./publish") {
        Remove-Item "./publish" -Recurse -Force
    }
    if (Test-Path "./azure-deploy.zip") {
        Remove-Item "./azure-deploy.zip" -Force
    }

    # Restore .NET packages
    Write-ColorOutput $Yellow "📦 Restoring .NET packages..."
    dotnet restore
    if ($LASTEXITCODE -ne 0) { throw "Failed to restore .NET packages" }

    # Install Angular dependencies
    Write-ColorOutput $Yellow "📦 Installing Angular dependencies..."
    Set-Location ClientApp
    npm install
    if ($LASTEXITCODE -ne 0) { 
        Set-Location ..
        throw "Failed to install Angular dependencies" 
    }

    # Build Angular application
    Write-ColorOutput $Yellow "🔨 Building Angular application..."
    ng build --configuration=production
    if ($LASTEXITCODE -ne 0) { 
        Set-Location ..
        throw "Failed to build Angular application" 
    }
    Set-Location ..

    # Publish .NET application
    Write-ColorOutput $Yellow "🔨 Publishing .NET application..."
    dotnet publish -c Release -o "./publish"
    if ($LASTEXITCODE -ne 0) { throw "Failed to publish .NET application" }

    # Create deployment package directory
    Write-ColorOutput $Yellow "📁 Creating deployment package..."
    New-Item -ItemType Directory -Path $OutputPath -Force | Out-Null
    
    # Copy published files
    Copy-Item "./publish/*" $OutputPath -Recurse -Force

    # Create zip file for upload
    Write-ColorOutput $Yellow "🗜️ Creating zip file for upload..."
    Compress-Archive -Path "$OutputPath/*" -DestinationPath "./azure-deploy.zip" -Force

    # Display file info
    $ZipInfo = Get-Item "./azure-deploy.zip"
    $SizeMB = [math]::Round($ZipInfo.Length / 1MB, 2)

    Write-ColorOutput $Green "✅ Package prepared successfully!"
    Write-Output ""
    Write-ColorOutput $Green "📊 Package Information:"
    Write-Output "  Package location: $(Resolve-Path './azure-deploy.zip')"
    Write-Output "  Package size: $SizeMB MB"
    Write-Output "  Files included: $(Get-ChildItem $OutputPath -Recurse | Measure-Object).Count files"
    Write-Output ""

    Write-ColorOutput $Yellow "🚀 Next Steps for Azure Portal Deployment:"
    Write-Output "1. Go to portal.azure.com"
    Write-Output "2. Create a new Web App (.NET 8 runtime)"
    Write-Output "3. Go to Advanced Tools → Kudu"
    Write-Output "4. Navigate to Tools → Zip Push Deploy"
    Write-Output "5. Upload: azure-deploy.zip"
    Write-Output ""
    Write-ColorOutput $Green "📝 Detailed instructions available in: AZURE_PORTAL_DEPLOYMENT.md"

} catch {
    Write-ColorOutput $Red "❌ Build failed: $_"
    exit 1
} finally {
    # Cleanup
    if (Test-Path "./publish") {
        Remove-Item "./publish" -Recurse -Force -ErrorAction SilentlyContinue
    }
}

Write-ColorOutput $Green "🎉 Ready for Azure Portal deployment!"
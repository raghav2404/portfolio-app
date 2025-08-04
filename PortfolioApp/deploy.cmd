@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off

:: ----------------------
:: KUDU Deployment Script for Angular + .NET 8 Portfolio
:: Version: 1.0.0
:: ----------------------

:: Prerequisites
:: -------------

:: Verify node.js installed
where node 2>nul >nul
IF %ERRORLEVEL% NEQ 0 (
  echo Missing node.js executable, please install node.js, if already installed make sure it can be reached from current environment.
  goto error
)

:: Verify dotnet installed
where dotnet 2>nul >nul
IF %ERRORLEVEL% NEQ 0 (
  echo Missing dotnet executable, please install .NET 8 SDK
  goto error
)

:: Setup
:: -----

setlocal enabledelayedexpansion

SET ARTIFACTS=%~dp0%..\artifacts

IF NOT DEFINED DEPLOYMENT_SOURCE (
  SET DEPLOYMENT_SOURCE=%~dp0%.
)

IF NOT DEFINED DEPLOYMENT_TARGET (
  SET DEPLOYMENT_TARGET=%ARTIFACTS%\wwwroot
)

IF NOT DEFINED NEXT_MANIFEST_PATH (
  SET NEXT_MANIFEST_PATH=%ARTIFACTS%\manifest

  IF NOT DEFINED PREVIOUS_MANIFEST_PATH (
    SET PREVIOUS_MANIFEST_PATH=%ARTIFACTS%\manifest
  )
)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Deployment
:: ----------

echo Handling Angular + ASP.NET Core Portfolio deployment.

:: 1. Install Angular CLI globally
echo Installing Angular CLI...
call :ExecuteCmd npm install -g @angular/cli@17
IF !ERRORLEVEL! NEQ 0 goto error

:: 2. Install Angular dependencies
echo Installing Angular dependencies...
pushd "%DEPLOYMENT_SOURCE%\ClientApp"
call :ExecuteCmd npm install
IF !ERRORLEVEL! NEQ 0 goto error

:: 3. Build Angular application
echo Building Angular application...
call :ExecuteCmd ng build --configuration=production
IF !ERRORLEVEL! NEQ 0 goto error
popd

:: 4. Restore .NET packages
echo Restoring .NET packages...
call :ExecuteCmd dotnet restore "%DEPLOYMENT_SOURCE%\PortfolioApp.csproj"
IF !ERRORLEVEL! NEQ 0 goto error

:: 5. Publish .NET application
echo Publishing .NET application...
call :ExecuteCmd dotnet publish "%DEPLOYMENT_SOURCE%\PortfolioApp.csproj" --output "%DEPLOYMENT_TARGET%" --configuration Release --no-restore
IF !ERRORLEVEL! NEQ 0 goto error

:: 6. Verify deployment files
echo Verifying deployment files...
if not exist "%DEPLOYMENT_TARGET%\PortfolioApp.dll" (
  echo ERROR: PortfolioApp.dll not found in deployment target
  goto error
)

if not exist "%DEPLOYMENT_TARGET%\wwwroot\index.html" (
  echo ERROR: Angular build output not found in wwwroot
  goto error
)

echo Deployment verification successful.

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
goto end

:: Execute command routine that will echo out when error
:ExecuteCmd
setlocal
set _CMD_=%*
echo Executing: %_CMD_%
call %_CMD_%
if "%ERRORLEVEL%" NEQ "0" echo Failed exitCode=%ERRORLEVEL%, command=%_CMD_%
exit /b %ERRORLEVEL%

:error
endlocal
echo An error has occurred during web site deployment.
call :exitSetErrorLevel
call :exitFromFunction 2>nul

:exitSetErrorLevel
exit /b 1

:exitFromFunction
()

:end
endlocal
echo Portfolio deployment completed successfully.
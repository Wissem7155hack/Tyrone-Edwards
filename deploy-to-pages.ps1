param([string]$repo = "https://github.com/Wissem7155hack/Tyrone-Edwards.git")

$distPath = Resolve-Path ".\dist"
$stagingPath = ".\.ghpages-deploy"

Write-Host "🚀 Starting deployment to GitHub Pages..."

# Clean staging
if (Test-Path $stagingPath) {
    Remove-Item $stagingPath -Recurse -Force -ErrorAction SilentlyContinue
}

# Create staging directory
New-Item -ItemType Directory -Path $stagingPath -Force | Out-Null
Write-Host "📦 Copying dist files..."
Copy-Item "$distPath\*" $stagingPath -Recurse -Force

# Add .nojekyll
New-Item -Path "$stagingPath\.nojekyll" -ItemType File -Force | Out-Null

# Change to staging directory
Push-Location $stagingPath

# Initialize and deploy
Write-Host "🔧 Initializing git..."
git init 2>$null
git config user.email "wissemwchtiba@gmail.com"
git config user.name "Deploy Bot"
git add .
git commit -m "Deploy to GitHub Pages" 2>$null

Write-Host "📤 Pushing to gh-pages..."
git remote add origin $repo 2>$null
$pushResult = git push -u origin HEAD:gh-pages --force 2>&1
Write-Host $pushResult

Pop-Location

# Cleanup
Remove-Item $stagingPath -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "✅ Deployment complete!"
Write-Host "🌐 Visit: https://wissem7155hack.github.io/Tyrone-Edwards/"

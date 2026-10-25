# tools/analyze_themes_data.ps1
$rawJson = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
$themes = $rawJson | ConvertFrom-Json

Write-Host "Total themes in themes.json: $($themes.Count)"

$cats = $themes | Group-Object category | Sort-Object Count -Descending
Write-Host "`nCategories breakdown:"
foreach ($c in $cats) {
    Write-Host "  - $($c.Name): $($c.Count) themes"
}

$previewMissing = 0
$previewWebp = 0
$previewJpg = 0
$previewFallback = 0

foreach ($t in $themes) {
    $id = $t.id
    $webpPath = "d:\dvweb\assets\previews\$id.webp"
    $jpgPath = "d:\dvweb\assets\previews\$id.jpg"
    if (Test-Path $webpPath) { $previewWebp++ }
    elseif (Test-Path $jpgPath) { $previewJpg++ }
    else { $previewMissing++ }
}

Write-Host "`nPreview assets analysis:"
Write-Host "  - Previews with .webp: $previewWebp"
Write-Host "  - Previews with .jpg: $previewJpg"
Write-Host "  - Previews missing locally: $previewMissing"

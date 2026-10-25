# tools/check_previews.ps1
$rawJson = [System.IO.File]::ReadAllText("d:\dvweb\data\themes.json", [System.Text.Encoding]::UTF8)
$themes = $rawJson | ConvertFrom-Json

$missing = @()
foreach ($t in $themes) {
    $id = $t.id
    $webpPath = "d:\dvweb\assets\previews\$id.webp"
    $jpgPath = "d:\dvweb\assets\previews\$id.jpg"
    if (-not (Test-Path $webpPath) -and -not (Test-Path $jpgPath)) {
        $missing += "$($t.code) | $($t.id) | $($t.name) | preview: $($t.previewImage)"
    }
}

Write-Host "Missing preview files count: $($missing.Count)"
$missing | ForEach-Object { Write-Host "  - $_" }

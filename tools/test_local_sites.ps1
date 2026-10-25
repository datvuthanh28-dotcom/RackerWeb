# tools/test_local_sites.ps1
$json = Get-Content -Path "d:\dvweb\data\themes.json" -Raw -Encoding UTF8 | ConvertFrom-Json
Write-Host "Total themes in JSON: $($json.Count)"
$missingIndex = 0
$missingSub = 0

foreach ($t in $json) {
    $localPath = "d:\dvweb\" + $t.localUrl.Replace('/', '\')
    if (-not (Test-Path $localPath)) {
        $missingIndex++
    }
    $dir = Split-Path $localPath
    if (-not (Test-Path "$dir\san-pham.html") -or -not (Test-Path "$dir\gioi-thieu.html") -or -not (Test-Path "$dir\lien-he.html") -or -not (Test-Path "$dir\css\style.css") -or -not (Test-Path "$dir\js\app.js")) {
        $missingSub++
    }
}

Write-Host "Missing index.html: $missingIndex"
Write-Host "Missing subpages / assets: $missingSub"

if ($missingIndex -eq 0 -and $missingSub -eq 0) {
    Write-Host ">>> PERFECT! ALL 113 LOCAL WEBSITES EXIST WITH ALL SUBPAGES, CSS, AND JS!"
}

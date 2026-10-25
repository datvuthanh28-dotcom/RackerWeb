$pages = @(
    "sites/auto-garage-demo-40/index.html",
    "sites/auto-garage-demo-40/san-pham.html",
    "sites/auto-garage-demo-40/products.html",
    "sites/auto-garage-demo-40/product-detail.html",
    "sites/auto-garage-demo-40/cart.html",
    "sites/auto-garage-demo-40/gioi-thieu.html",
    "sites/auto-garage-demo-40/about.html",
    "sites/auto-garage-demo-40/lien-he.html",
    "sites/auto-garage-demo-40/contact.html",
    "sites/auto-garage-demo-40/blog.html",
    "sites/auto-garage-demo-40/css/style.css",
    "sites/auto-garage-demo-40/js/app.js",
    "sites/auto-garage-demo-40/data/products.js",
    "sites/auto-garage-demo-40/assets/hero-showroom.jpg",
    "sites/auto-garage-demo-40/assets/car-sedan.jpg",
    "sites/auto-garage-demo-40/assets/car-suv.jpg",
    "sites/auto-garage-demo-40/assets/car-coupe.jpg",
    "sites/auto-garage-demo-40/assets/service-maintenance.jpg",
    "index.html",
    "data/themes.json",
    "js/themes-data.js"
)

Write-Host "================ TESTING LOCAL HTTP ENDPOINTS ================"
$allPassed = $true

foreach ($p in $pages) {
    $url = "http://localhost:8080/$p"
    try {
        $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5
        if ($resp.StatusCode -eq 200 -and $resp.Content.Length -gt 0) {
            Write-Host "[PASS 200 OK] ($($resp.Content.Length) bytes) -> $p"
        } else {
            Write-Host "[FAIL] Status $($resp.StatusCode) -> $p"
            $allPassed = $false
        }
    } catch {
        Write-Host "[ERROR] Could not fetch $p : $_"
        $allPassed = $false
    }
}

if ($allPassed) {
    Write-Host "================ ALL 20 ENDPOINTS RETURNED 200 OK ================"
} else {
    Write-Host "================ SOME ENDPOINTS FAILED ================"
}

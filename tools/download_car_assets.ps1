$urls = @{
    "service-maintenance.jpg" = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
    "service-tuning.jpg" = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
    "service-detailing.jpg" = "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80"
    "car-porsche.jpg" = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    "car-bmw.jpg" = "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
    "car-interior.jpg" = "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
}

$destDir = "d:\dvweb\sites\auto-garage-demo-40\assets"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

foreach ($item in $urls.GetEnumerator()) {
    $outPath = Join-Path $destDir $item.Key
    if (!(Test-Path $outPath)) {
        Write-Host "Downloading $($item.Key)..."
        try {
            [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
            Invoke-WebRequest -Uri $item.Value -OutFile $outPath -UserAgent "Mozilla/5.0" -TimeoutSec 20
            Write-Host "Success $($item.Key)"
        } catch {
            Write-Host "Failed $($item.Key)"
        }
    } else {
        Write-Host "Exists: $($item.Key)"
    }
}

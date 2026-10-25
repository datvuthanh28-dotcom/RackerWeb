[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$url = "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format"
$dest = "d:\dvweb\sites\auto-garage-demo-40\assets\service-maintenance.jpg"
try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent "Mozilla/5.0"
    Write-Host "Success service-maintenance"
} catch {
    Write-Host "Fallback: copying existing image"
    Copy-Item "d:\dvweb\sites\auto-garage-demo-40\assets\service-tuning.jpg" $dest
}

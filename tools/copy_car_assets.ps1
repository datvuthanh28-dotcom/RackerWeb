# tools/copy_car_assets.ps1
$brain = "C:\Users\Admin\.gemini\antigravity-ide\brain\1e50e87a-e5da-4b56-8525-fc9a11f81c26"
$target = "d:\dvweb\sites\auto-garage-demo-40\assets"

Copy-Item "$brain\car_sedan_luxury*.jpg" "$target\car-sedan.jpg" -Force
Copy-Item "$brain\car_suv_electric*.jpg" "$target\car-suv.jpg" -Force
Copy-Item "$brain\preview_car_113*.jpg" "$target\car-coupe.jpg" -Force

# Service and additional assets
Copy-Item "$brain\hero_car_showroom*.jpg" "$target\hero-showroom.jpg" -Force

Write-Host "Copied car assets successfully!"

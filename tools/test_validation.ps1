# tools/test_validation.ps1
try {
    $json = Get-Content -Path "d:\dvweb\data\themes.json" -Raw -Encoding UTF8 | ConvertFrom-Json
    Write-Host ">>> JSON Valid! Total themes: $($json.Count)"
    Write-Host "Sample Theme 1:"
    Write-Host "  Name: $($json[0].name)"
    Write-Host "  Code: $($json[0].code)"
    Write-Host "  Category: $($json[0].category)"
    Write-Host "  DemoUrl: $($json[0].demoUrl)"
    Write-Host "  PreviewImage: $($json[0].previewImage)"
    Write-Host "  PreviewStatus: $($json[0].previewStatus)"
    Write-Host "  AccessStatus: $($json[0].accessStatus)"
    
    # Check AI preview count
    $aiCount = ($json | Where-Object { $_.previewStatus -eq "generated-ai" }).Count
    Write-Host "`n>>> Themes with AI generated previews: $aiCount"
    
    # Check categories distribution
    Write-Host "`n>>> Top 5 Categories:"
    $json | Group-Object category | Sort-Object Count -Descending | Select-Object -First 5 | ForEach-Object {
        Write-Host "  - $($_.Name): $($_.Count) themes"
    }
} catch {
    Write-Host "Error parsing JSON: $_"
}

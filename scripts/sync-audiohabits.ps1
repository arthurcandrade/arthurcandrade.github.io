# Sync AudioHabits Script (Local Only)
# Fetches Arthur Andrade's public profile from AudioHabits (https://audiohabits.co/u/12163317381)
# Extracts Top Artists for the 6-month period (Last 6 Months)
# Outputs to js/data/audiohabits.json

$ErrorActionPreference = 'Stop'
$url = 'https://audiohabits.co/u/12163317381'
Write-Host "[AUDIOHABITS SYNC] Fetching profile from $url..." -ForegroundColor Cyan

$rawHtml = & curl.exe -s $url
if (-not $rawHtml -or $rawHtml.Length -lt 500) {
    Write-Error "Failed to fetch HTML or response was too short."
}

$sectionRegex = [regex]'(?s)<section class="[^"]*griditem[^"]*"><header[^>]*><h2[^>]*>([^<]+)</h2><p[^>]*>([^<]+)</p></header><ol[^>]*>(.*?)</ol>'
$rowRegex = [regex]'(?s)<li class="[^"]*row[^"]*"><span class="[^"]*rank[^"]*">([^<]+)</span>.*?src="([^"]+)".*?<a href="([^"]+)"[^>]*class="[^"]*name[^"]*">([^<]+)</a>(?:<span class="[^"]*subtitle[^"]*">([^<]+)</span>)?'

$sectionMatches = $sectionRegex.Matches($rawHtml)
$artists = @()

foreach ($sm in $sectionMatches) {
    $heading = $sm.Groups[1].Value.Trim().ToLower()
    $timeframe = $sm.Groups[2].Value.Trim().ToLower()
    $olContent = $sm.Groups[3].Value

    # Focus exclusively on Top Artists - Last 6 Months
    if ($heading -match 'top artists' -and $timeframe -match '6 month') {
        $rowMatches = $rowRegex.Matches($olContent)

        foreach ($rm in $rowMatches) {
            $rank = $rm.Groups[1].Value.Trim()
            $rawImg = $rm.Groups[2].Value.Trim()
            $spotifyUrl = $rm.Groups[3].Value.Trim()
            $name = $rm.Groups[4].Value.Trim()
            $genre = if ($rm.Groups[5].Success -and $rm.Groups[5].Value.Trim()) { $rm.Groups[5].Value.Trim() } else { "electronic" }

            # Extract direct Spotify CDN image url if wrapped in Next.js image proxy
            $realImg = $rawImg
            if ($rawImg -match 'url=([^&]+)') {
                $realImg = [System.Uri]::UnescapeDataString($Matches[1])
            }

            $artists += @{
                rank = $rank
                name = $name
                genre = $genre
                spotifyUrl = $spotifyUrl
                imageUrl = $realImg
            }
        }
        break
    }
}

$data = @{
    updatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssZ")
    artists   = $artists
}

$outputDir = Join-Path $PSScriptRoot '..\js\data'
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$outputPath = Join-Path $outputDir 'audiohabits.json'
$json = $data | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($outputPath, $json, [System.Text.Encoding]::UTF8)

Write-Host "[AUDIOHABITS SYNC] Successfully updated $outputPath with $($artists.Count) artists (6 Months)!" -ForegroundColor Green
foreach ($a in $artists) {
    Write-Host "  #$($a.rank) $($a.name) - $($a.genre)"
}

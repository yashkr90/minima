# Minima Game — installable web app (self-contained build)

React is bundled directly into the JS file — no external CDN calls.

## IMPORTANT — if you installed an earlier version on your phone

The previous build's service worker cached itself permanently and never
checked for updates. To get this fixed version to actually show up:

1. On your phone: long-press the home screen icon → App info → Storage →
   Clear storage / Clear data (or just uninstall the home screen shortcut)
2. In Chrome: Settings → Site settings → find your Netlify/GitHub Pages URL
   → Clear & reset
3. Re-deploy this new folder to your host (overwrite the old files)
4. Open the URL fresh, then Add to Home screen again

After this, future updates will load automatically — the service worker now
always fetches the latest HTML instead of caching it forever.

## Host it (pick one)

**Claim your Netlify Drop site** — after dragging the folder to
https://app.netlify.com/drop, click "Claim this site" and sign up free.

**GitHub Pages (free, never expires)**
1. New repo → upload all files in this folder
2. Settings → Pages → Source: deploy from branch → main / root
3. Live at https://yourusername.github.io/reponame

## Install on your phone
1. Open the live URL in Chrome on Android
2. ⋮ → Add to Home screen
3. Opens full-screen, works offline

## Entering negative scores
Tap the **±** button next to a score box to flip it negative.

## Your data
Saved on-device via localStorage. Persists between opens.

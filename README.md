# Minima Game — installable web app (self-contained build)

React is bundled directly into the JS file — no external CDN calls, so it
won't blank out on networks that block third-party scripts.

## Host it permanently (pick one)

**Claim your Netlify Drop site**
After dragging the folder to https://app.netlify.com/drop, click "Claim this
site" and sign up free — same URL, no more 1-hour expiry.

**GitHub Pages (free, never expires)**
1. New repo on github.com → upload all files in this folder
2. Settings → Pages → Source: deploy from branch → main / root
3. Live at https://yourusername.github.io/reponame

## Install on your phone
1. Open the live URL in Chrome on Android
2. ⋮ → Add to Home screen
3. Opens full-screen like a native app, works offline

## Entering negative scores
Tap the **±** button next to a score box to flip it negative — mobile number
keyboards usually hide the minus key, so this works around that.

## Your data
Saved on-device via localStorage. Persists between opens as long as you don't
clear that site's browser data.

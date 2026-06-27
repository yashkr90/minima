# Minima Game — installable web app (self-contained build)

React is bundled directly into the JS file — no external CDN calls, no
external icon package. Fully self-contained.

## What's in this version
- Rename any board (pencil icon on its tab)
- Lock a round (lock icon) to disable editing/selecting it
- New rounds start blank — type your own numbers, nothing defaults to 0
- Plain text score boxes — your phone's normal keyboard (with the minus key)
  shows up instead of a restricted number pad
- Select rounds with the checkbox, then one "Delete selected" button removes
  them — no more accidental taps on a delete icon sitting next to lock

## Host it (pick one)

**Claim your Netlify Drop site** — after dragging this folder to
https://app.netlify.com/drop, click "Claim this site" and sign up free so it
doesn't expire.

**GitHub Pages (free, never expires)**
1. New repo → upload all files in this folder
2. Settings → Pages → Source: deploy from branch → main / root
3. Live at https://yourusername.github.io/reponame

## Install on your phone
1. Open the live URL in Chrome on Android
2. ⋮ → Add to Home screen
3. Opens full-screen, works offline

## If you're updating from an older install
Clear the old cached version once (Chrome → Site settings → your URL →
Clear & reset, or just remove and reinstall the home screen shortcut) so the
service worker picks up the new files. After that, future updates load
automatically.

## Your data
Saved on-device via localStorage. Persists between opens.

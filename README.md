# Minima Game — installable web app (self-contained build)

This is a real production build — React is bundled directly into the JS file,
not loaded from any external CDN. It will not show a blank page due to a
blocked network request.

## Host it (pick one, ~2 minutes)

**Netlify Drop (fastest, no account needed)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page
3. You'll get a live URL like https://random-name.netlify.app

**GitHub Pages**
1. Create a new repo, upload everything in this folder
2. Settings → Pages → source = main branch, root folder
3. URL: https://yourusername.github.io/reponame

## Install on your phone
1. Open the live URL in Chrome on Android
2. Tap ⋮ → Add to Home screen (or accept the Install prompt)
3. It now opens full-screen from your home screen, works offline

## Your data
Saved on-device via localStorage — nothing leaves your phone, nothing gets
wiped between opens. If you ever clear your browser's site data for this URL,
that would reset it (same as any installed web app), but normal use is safe.

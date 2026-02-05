# Best Friend Forever 💙 (Lotus)

## 1) Put your 30-second MP3 clips here
Copy / rename your songs exactly like this:

- assets/music/song1.mp3
- assets/music/song2.mp3
- assets/music/song3.mp3

(You can cut 30 seconds using https://mp3cut.net)

## 2) Run locally (recommended)
If you double-click index.html sometimes audio/PWA is buggy.
Use a local server:

### Option A: VS Code Live Server
- Install "Live Server" extension
- Right click index.html -> Open with Live Server

### Option B: Python
- Open terminal in this folder
- python -m http.server 5500
- Open http://localhost:5500

## 3) Host + QR (for your friend)
### Netlify (fast)
- Go to Netlify -> Deploy manually -> Drag this folder
- You'll get a URL like https://something.netlify.app
- Open the site -> Final page -> "Share by QR" button

### GitHub Pages (also great)
- Create repo, upload all files, enable Pages in Settings

## Notes
- Mobile needs one user tap to start sound (browser rule). This page handles it.
- After first load, service worker caches songs for offline.

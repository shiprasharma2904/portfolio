# Shipra Sharma - Portfolio

A static portfolio website built with HTML, CSS and vanilla JavaScript. No build step needed.

## Folder structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js          <- all your content is at the top (DATA)
├── assets/
│   ├── images/           (profile.jpg, add project-gift-store.jpg)
│   └── documents/        (resume.pdf, ai-literacy-certificate.pdf)
└── README.md
```

## Replace photo, project image, resume
- Photo: replace `assets/images/profile.jpg` (keep the same name).
- Project image: add `assets/images/project-gift-store.jpg`.
- Resume: replace `assets/documents/resume.pdf`.

## Edit content
Open `js/script.js` and change the `DATA` block at the top (look for "EDIT HERE").
To add a project or certificate, copy an existing entry. Contact details are in `index.html`.
Colors are at the top of `css/style.css`.

## Deploy on GitHub Pages
1. Create a new public repository on GitHub (for example `portfolio`).
2. Upload everything inside this folder (index.html at the top level of the repo).
3. Go to Settings > Pages.
4. Under "Build and deployment", choose Source: Deploy from a branch.
5. Select branch `main` and folder `/ (root)`, then click Save.
6. Wait 1-2 minutes. Your site will be at `https://shiprasharma2904.github.io/portfolio/`.

## Test locally
Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.

# Angels of Albuquerque - Website

A multi-page React Router site for the Angels of Albuquerque Volleyball Club, styled with Tailwind CSS and deployed to GitHub Pages.

### Structure:
```
src/
├── pages/
│   ├── Home.js
│   ├── Programs.js
│   ├── Coaches.js
│   ├── Tryouts.js
│   └── Contact.js
├── components/
│   └── Navigation.js
├── App.js
└── index.js
public/
├── index.html
├── 404.html       (SPA routing shim for GitHub Pages)
├── emblem.png
├── wordmark.png
└── favicon.ico
```

## Local Development

```bash
npm install
npm start
```
Runs the app at `http://localhost:3000`.

## Deployment (GitHub Pages)

This site deploys via the `gh-pages` package to the URL in `package.json`'s `homepage` field:
`https://jcsanchez0216.github.io/angels-volleyball-website`

```bash
npm run deploy
```

This runs `npm run build` (via the `predeploy` script) and publishes the `build/` folder to the `gh-pages` branch, which GitHub Pages serves.

Because the site lives under a subpath (`/angels-volleyball-website/`) rather than a domain root, `src/App.js` sets `<Router basename={process.env.PUBLIC_URL}>` and `public/404.html` + a small script in `public/index.html` handle deep links and page refreshes (GitHub Pages has no server-side rewrite, so this "SPA on GitHub Pages" shim redirects unknown paths back into the app — see https://github.com/rafgraph/spa-github-pages).

## Features

- Multi-page application with React Router v6
- Fixed navigation bar with mobile menu
- Tailwind CSS with brand design tokens (maroon/ink/paper/taupe)
- Responsive design across all pages
- Leadership contact cards, program pricing cards, coach bios

## Support

If you have questions, check the inline comments in each file or reach out to the club's technical contact.

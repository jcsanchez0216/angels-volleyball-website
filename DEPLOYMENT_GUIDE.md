# 🚀 DEPLOYMENT GUIDE

This site deploys to **GitHub Pages** — there is no separate hosting account to set up.

---

## First-Time Setup

1. Clone the `angels-volleyball-website` repo and install dependencies:
   ```bash
   git clone https://github.com/jcsanchez0216/angels-volleyball-website.git
   cd angels-volleyball-website
   npm install
   ```
2. Confirm `package.json` has:
   - `"homepage": "https://jcsanchez0216.github.io/angels-volleyball-website"`
   - `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"` in `scripts`
   - `gh-pages` listed in `dependencies`

That's it — no separate build/hosting service account is required.

---

## Deploying an Update

1. Make your changes and test locally:
   ```bash
   npm start
   ```
2. Commit and push to GitHub as usual:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```
3. Publish the site:
   ```bash
   npm run deploy
   ```
   This builds the production bundle and pushes it to the `gh-pages` branch. GitHub Pages serves that branch automatically — the live site updates within a minute or two.

---

## Adding Logo / Image Assets

Logo and brand images live directly in `public/` (`emblem.png`, `wordmark.png`, `favicon.ico`) — there is no `public/logos/` folder. Replace those files directly, keep the same filenames, then run `npm run deploy`.

---

## Participant agreement email

Academy and Hybrid include the athlete participant agreement. Submissions are meant for Theresa Sanchez. Her address from the 2026-27 handbook, and the form endpoint, live in `src/config/participantForm.js` (override with `.env.local`; see `.env.example`).

GitHub Pages cannot send mail on its own:

1. Create a form at [formspree.io](https://formspree.io) using Theresa’s address.
2. Confirm the verification email Formspree sends her.
3. Set `REACT_APP_PARTICIPANT_FORM_ENDPOINT` to the form URL (`https://formspree.io/f/…`) or paste that URL into `endpoint` in `src/config/participantForm.js`.
4. Run `npm run deploy` again so the production build includes the endpoint.

Until that endpoint is set, the form still displays and shows an error when someone submits. It does not fall back to a `mailto:` link.

## 🎯 Custom Domain (Later)

To point `angelsofalbuquerque.com` at the site:

1. Add a `CNAME` file to `public/` containing the domain, or configure it under the repo's **Settings → Pages**.
2. Update your domain registrar's DNS records to point at GitHub Pages (see GitHub's ["Managing a custom domain"](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) docs).
3. Wait for DNS propagation (can take up to 24 hours).

---

## 📞 COMMON QUESTIONS

**Q: How do I preview changes before publishing?**
A: Run `npm start` locally and check `http://localhost:3000`.

**Q: What if something breaks after deploying?**
A: `npm run deploy` republishes the `gh-pages` branch — commit a fix and run it again. Your `main` branch history (`git log`) is untouched, so you can always fix forward.

**Q: How do I know if the deployment worked?**
A: Check the repo's **Actions**/**Pages** status under **Settings → Pages**, or simply reload the live URL after `npm run deploy` finishes.

**Q: When does the site go live?**
A: A minute or two after `npm run deploy` completes.

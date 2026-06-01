# 🚀 FIRST-TIME DEPLOYMENT GUIDE

You have GitHub and Netlify accounts. Here's exactly what to do next.

---

## STEP 1: Create a New Repository on GitHub (2 minutes)

1. Go to **github.com**
2. Click the **"+"** icon in the top right
3. Click **"New repository"**
4. Fill in:
   - **Repository name:** `angels-volleyball-website`
   - **Description:** `Angels of Albuquerque Volleyball Club Website`
   - **Visibility:** Select **Public**
5. **DO NOT** check "Initialize this repository with README"
6. Click **"Create repository"**

You'll see a screen with instructions. **Keep this window open.**

---

## STEP 2: Download GitHub Desktop (Easiest Method)

1. Go to **desktop.github.com**
2. Download and install GitHub Desktop
3. Open it and sign in with your GitHub account
4. Click **File** → **Clone Repository**
5. You should see `angels-volleyball-website` listed
6. Click it and click **Clone**
7. Choose where to save it on your computer (Desktop is fine)

A folder opens. This is your project folder.

---

## STEP 3: Add the Website Files

I've created all the files you need. They're in `/mnt/user-data/outputs/`

1. Download all files from there
2. Copy them into your project folder (the one GitHub Desktop created)
3. Include:
   - `package.json`
   - `netlify.toml`
   - `.gitignore`
   - `README.md`
   - `src/` folder (with all files inside)
   - `public/` folder (with index.html)

---

## STEP 4: Commit and Push to GitHub

1. Go back to **GitHub Desktop**
2. You should see all the new files listed as "Changes"
3. At the bottom left, write a message: `"Initial website setup"`
4. Click **"Commit to main"**
5. Click **"Push origin"** (top right)

That's it! Your code is now on GitHub.

---

## STEP 5: Connect to Netlify (2 minutes)

1. Go to **netlify.com**
2. Log in with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Click **GitHub**
5. Find `angels-volleyball-website` in the list
6. Click it
7. Netlify shows build settings - just click **"Deploy site"**

**DONE!** Your site is now live at a Netlify URL (looks like `xyz-123.netlify.app`)

---

## STEP 6: Add Your Logo Images (Optional Now, Important Later)

1. In your project folder, create a new folder: `public/logos/`
2. Add your logo images:
   - `wings-mark.png` (small icon)
   - `wings-mark-large.png` (large hero version)
   - `angels-text-logo.png` (full text logo)
3. Go to GitHub Desktop
4. Commit with message: `"Add logo images"`
5. Push to GitHub
6. Netlify automatically redeploys in 30 seconds
7. Your logos appear on the site!

---

## STEP 7: Point angelsofalbuquerque.com to Your Site (Later)

Once the site is working, you'll update your domain:

1. Log in to your **IONOS account** (your domain registrar)
2. Go to DNS Settings
3. In Netlify, go to **Site Settings** → **Domain Management**
4. Follow their instructions to update nameservers
5. Wait 24 hours
6. Your site is now at angelsofalbuquerque.com!

---

## 🎯 YOU'RE DONE!

Your parents can now make changes anytime:

1. Go to GitHub.com
2. Open your repo
3. Click any `.js` file
4. Click the pencil icon (Edit)
5. Make changes
6. Scroll down → **"Commit changes"**
7. Site updates automatically in 10 seconds!

---

## 📞 COMMON QUESTIONS

**Q: Can my parents edit the site directly?**
A: Yes! They can go to github.com, click Edit, and make changes. Easy.

**Q: What if something breaks?**
A: GitHub saves everything. You can always revert to a previous version.

**Q: How do I know if the deployment worked?**
A: Check your Netlify dashboard. Green = working. Red = error.

**Q: When does the site go live?**
A: Immediately after you push to GitHub. Netlify deploys within 10 seconds.

---

**Ready? Let's deploy!** 🚀

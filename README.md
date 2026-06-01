# Angels of Albuquerque - Website Updates

## 📦 What's Inside

This folder contains all the updated files for your multi-page React Router website. 

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
├── App.js (UPDATED)
└── index.js (UPDATED)
package.json (UPDATED)
```

## 🚀 How to Use

### Step 1: Copy the files into your GitHub repo
Copy the contents of this folder into your `angels-website-complete/` folder in your local machine.

Replace these files:
- `src/App.js`
- `src/index.js`
- `package.json`

Create these new folders/files:
- `src/pages/Home.js`
- `src/pages/Programs.js`
- `src/pages/Coaches.js`
- `src/pages/Tryouts.js`
- `src/pages/Contact.js`
- `src/components/Navigation.js`

### Step 2: Push to GitHub
```bash
cd angels-volleyball-website/angels-website-complete
git add .
git commit -m "Add multi-page React Router architecture with 5 new pages and Navigation component"
git push
```

### Step 3: Netlify Auto-Deploys
Netlify will automatically rebuild your site within 30 seconds. Your site will be LIVE with:
- ✅ Working navigation between all pages
- ✅ Home, Programs, Coaches, Tryouts, Contact pages
- ✅ All buttons functional
- ✅ Professional styling

### Step 4: Update netlify.toml (IMPORTANT)
Make sure your `netlify.toml` file contains this redirect rule for React Router:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This allows direct URL access to pages like `/coaches`, `/programs`, etc.

## 📝 Files Changed/Created

**Updated:**
- `package.json` - Added `react-router-dom` dependency
- `src/App.js` - Now uses BrowserRouter and Routes
- `src/index.js` - Removed StrictMode wrapper

**Created:**
- `src/components/Navigation.js` - Fixed navigation bar
- `src/pages/Home.js` - Home landing page
- `src/pages/Programs.js` - Programs overview
- `src/pages/Coaches.js` - Coaching staff
- `src/pages/Tryouts.js` - Tryouts information
- `src/pages/Contact.js` - Contact & leadership info

## ✨ Features

- Multi-page application with React Router v6
- Fixed navigation bar
- Professional styling with inline styles (no Tailwind conflicts)
- Responsive design
- All pages include hero sections and CTAs
- Leadership contact cards
- Program pricing cards
- Coach bios

## 🔗 Site URL
https://lambent-choux-6e8575.netlify.app/

## 📧 Support
If you have questions, check the inline comments in each file or reach out!

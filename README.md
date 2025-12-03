# Personal Academic Portfolio

A minimal, professional portfolio website designed for PhD aspirants in Electrical & Electronic Engineering. Features light/dark theme support and is optimized for GitHub Pages deployment.

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner and select **"New repository"**
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Keep it **Public**
5. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using Git (Recommended)**

```bash
# Navigate to your portfolio folder
cd /path/to/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Upload via GitHub Website**

1. Go to your new repository on GitHub
2. Click **"uploading an existing file"** link
3. Drag and drop all your portfolio files
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Click on **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select the **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://yourusername.github.io` within a few minutes!

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with light/dark themes
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/             # Folder for images and documents
    ├── profile.jpg     # Your profile photo
    ├── cv.pdf          # Your CV/Resume
    ├── project1.jpg    # Project screenshots
    ├── project2.jpg
    └── project3.jpg
```

## ✏️ Customization Guide

### 1. Personal Information

Open `index.html` and update:

- **Your Name**: Search for "Your Name" and replace with your actual name
- **Email**: Update `your.email@example.com`
- **Social Links**: Update GitHub, LinkedIn, and Google Scholar URLs
- **Bio**: Edit the biography paragraphs in the hero section
- **Location**: Update your city/country in the contact section

### 2. Profile Photo

1. Add your photo to the `assets/` folder as `profile.jpg`
2. Recommended size: 400x400 pixels or larger (square aspect ratio)
3. The image will automatically display with rounded corners

### 3. Education

Update the education timeline in the `#education` section:
- University name
- Degree and dates
- CGPA/GPA
- Thesis title
- Relevant coursework

### 4. Publications

For each publication, update:
- Paper title
- Authors (bold your name using `<strong>Your Name</strong>`)
- Journal/Conference name and year
- Abstract
- Links to PDF, code, and DOI

### 5. Projects

For each project card:
- Project title
- Description
- Technology tags
- Links to code repository and demo
- Add project screenshots to `assets/` folder

### 6. Experience

Update work experience entries:
- Position title
- Company/Institution name
- Dates
- Description of responsibilities

### 7. Skills

Customize the skill categories and items in the skills section.

### 8. CV

1. Save your CV as `cv.pdf` in the `assets/` folder
2. The CV link in the social links section will automatically work

## 🎨 Theme Customization

### Changing Colors

In `style.css`, modify the CSS variables in the `:root` selector:

```css
:root {
    --accent-color: #2563eb;    /* Main accent color */
    --accent-hover: #1d4ed8;    /* Hover state */
    --accent-light: #dbeafe;    /* Light accent for backgrounds */
}
```

### Changing Fonts

The website uses:
- **Source Serif 4** for headings
- **Inter** for body text

To change fonts, update the Google Fonts link in `index.html` and the font-family declarations in `style.css`.

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Light/Dark theme toggle with persistence
- ✅ Smooth scrolling navigation
- ✅ Animated sections on scroll
- ✅ Clean, academic aesthetic
- ✅ SEO-friendly structure
- ✅ Fast loading (no heavy dependencies)

## 🔧 Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Uses CSS custom properties for theming
- Font Awesome icons via CDN
- Google Fonts via CDN
- Intersection Observer API for scroll animations
- LocalStorage for theme persistence

## 📄 License

Feel free to use this template for your personal portfolio. Attribution is appreciated but not required.

---

**Good luck with your PhD applications! 🎓**


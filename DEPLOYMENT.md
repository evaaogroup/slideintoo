# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it `slideintoo`
4. Make it **Public** (required for GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 2. Connect Your Local Repository

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/paaricit/slideintoo.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 3. Update Repository Settings

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### 4. Enable GitHub Actions

1. Go to "Actions" tab in your repository
2. You should see the workflow file we created
3. GitHub Actions will automatically run when you push to main

### 5. Deploy Your Site

#### Option A: Automatic Deployment (Recommended)
```bash
# Just push to main branch - GitHub Actions will handle the rest
git push origin main
```

#### Option B: Manual Deployment
```bash
# Build and deploy manually
npm run deploy
```

### 6. Access Your Site

Your site will be available at:
```
https://paaricit.github.io/slideintoo
```

## 🔧 Configuration Files

### Update package.json
Make sure to update the homepage in `package.json`:

```json
{
  "homepage": "https://paaricit.github.io/slideintoo"
}
```

### Update vite.config.ts
The base path is already configured:
```typescript
export default defineConfig({
  base: '/slideintoo/',
  // ... rest of config
})
```

## 📋 Checklist

- [ ] Repository created on GitHub
- [ ] Repository is public
- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled in settings
- [ ] GitHub Actions workflow is running
- [ ] Site is accessible at the URL

## 🐛 Troubleshooting

### Common Issues

1. **404 Error**: Make sure repository is public
2. **Build Fails**: Check GitHub Actions logs
3. **Assets Not Loading**: Verify base path in vite.config.ts
4. **Page Not Found**: Wait 5-10 minutes for deployment

### Check Deployment Status

1. Go to "Actions" tab in your repository
2. Click on the latest workflow run
3. Check if all steps passed
4. Look for any error messages

## 🎉 Success!

Once deployed, your Slideintoo landing page will be live with:
- ✅ Apple-style animations
- ✅ Responsive design
- ✅ Fast loading
- ✅ SEO optimization
- ✅ Beautiful interactions

Your site will automatically update whenever you push changes to the main branch! 
# Deploying Alliance for Safe Motherhood Website to Render

This guide will help you deploy your Next.js website to Render for free hosting.

## Prerequisites

1. **Git Repository**: Your project needs to be in a Git repository (GitHub, GitLab, or Bitbucket)
2. **Render Account**: Create a free account at [render.com](https://render.com)

## Step 1: Prepare Your Project for Git

If you haven't already, initialize a Git repository and push to GitHub:

```bash
# Navigate to your project directory
cd "d:\Nextjs Projects\websites\alliance-safe-motherhood"

# Initialize Git repository
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Alliance for Safe Motherhood website"

# Add your GitHub repository as origin (replace with your repo URL)
git remote add origin https://github.com/yourusername/alliance-safe-motherhood.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Render

### Option A: Deploy via Render Dashboard

1. **Login to Render**: Go to [render.com](https://render.com) and sign in
2. **Create New Web Service**: Click "New +" → "Web Service"
3. **Connect Repository**: 
   - Connect your GitHub/GitLab account
   - Select your `alliance-safe-motherhood` repository
4. **Configure Build Settings**:
   - **Name**: `alliance-safe-motherhood`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: `18` (or latest)

### Option B: Deploy with render.yaml (Recommended)

Create a `render.yaml` file in your project root for automated deployment:

```yaml
services:
  - type: web
    name: alliance-safe-motherhood
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 18
```

## Step 3: Environment Configuration

Render will automatically:
- Install dependencies with `npm install`
- Build your Next.js app with `npm run build`
- Start the production server with `npm start`

## Step 4: Custom Domain (Optional)

After deployment, you can:
1. Go to your service settings on Render
2. Add a custom domain under "Custom Domains"
3. Point your domain's DNS to Render's servers

## Step 5: Continuous Deployment

Render automatically redeploys when you push changes to your connected Git repository.

## Build Configuration

Your `package.json` is already configured for Render deployment:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

## Troubleshooting

### Common Issues:

1. **Build Fails**: 
   - Check that all dependencies are listed in `package.json`
   - Ensure TypeScript errors are resolved

2. **Runtime Errors**:
   - Check Render logs in the dashboard
   - Verify environment variables if needed

3. **Slow Build Times**:
   - Render free tier has build time limits
   - Consider optimizing dependencies

### Build Logs

Monitor your deployment in the Render dashboard:
- Go to your service
- Click on "Logs" to see build and runtime logs
- Check for any error messages

## Free Tier Limitations

Render's free tier includes:
- ✅ 750 hours/month of runtime
- ✅ Custom domains
- ✅ SSL certificates
- ✅ GitHub integration
- ⚠️ Services sleep after 15 minutes of inactivity
- ⚠️ Cold start delays (30-60 seconds)

## Production Checklist

Before going live:
- [ ] Test all pages and functionality
- [ ] Verify contact forms work
- [ ] Check responsive design on mobile
- [ ] Test scroll-to-top functionality
- [ ] Verify all links and navigation
- [ ] Check loading performance

## Support

- **Render Documentation**: [docs.render.com](https://docs.render.com)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

Your website will be available at: `https://alliance-safe-motherhood.onrender.com`

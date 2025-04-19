# Netlify Deployment Guide

This document outlines the steps to deploy the La Empresa website to Netlify.

## Prerequisites

- GitHub repository with your project code
- Netlify account (create one at [netlify.com](https://www.netlify.com) if you don't have one)

## Deployment Steps

### 1. Push your code to GitHub

Make sure your code is committed and pushed to your GitHub repository.

### 2. Connect to Netlify

1. Log in to your Netlify account
2. Click "Add new site" → "Import an existing project"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub repositories
5. Select the repository containing your La Empresa website

### 3. Configure Build Settings

Netlify should automatically detect that this is a Vite project. The configuration is already set in the `netlify.toml` file, but verify the following settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 4. Advanced Settings (Optional)

- **Environment variables**: If needed, add any environment variables in the Netlify UI under "Site settings" → "Environment variables"
- **Domain settings**: Configure your custom domain under "Site settings" → "Domain management"

### 5. Deploy

Click "Deploy site" to start the deployment process. Netlify will:

1. Clone your repository
2. Run the build command (`npm run build`)
3. Deploy the `dist` directory to their CDN

### Continuous Deployment

Netlify automatically sets up continuous deployment. Any changes pushed to your main branch will trigger a new build and deployment.

## Troubleshooting

- **Build failures**: Check the build logs in Netlify for error messages
- **Routing issues**: The `netlify.toml` file includes configuration for handling SPA routing (all routes redirect to index.html)
- **JS/CSS not loading**: Verify that asset paths are correct in your code

## Security

The `netlify.toml` file includes security headers that protect your site:

- `X-Frame-Options`: Prevents clickjacking
- `X-XSS-Protection`: Helps prevent cross-site scripting attacks
- `X-Content-Type-Options`: Prevents MIME type sniffing
- `Referrer-Policy`: Controls information sent in the Referer header
- `Content-Security-Policy`: Restricts resources that can be loaded

## Need Help?

If you encounter issues with the deployment:
- Check Netlify's [documentation](https://docs.netlify.com/)
- Use Netlify's support system
- Review build logs for specific error messages 
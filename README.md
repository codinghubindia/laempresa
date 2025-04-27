# La Empresa - Premium Digital Solutions

A professionally designed website for La Empresa, showcasing their full stack development services and digital solutions.

![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-app-id-here/deploy-status)

## Deployment Instructions

This project is configured for easy deployment to Netlify.

### Deploy via Netlify UI

1. Create a new site on Netlify from Git
2. Connect to your GitHub repository
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click on "Deploy site"

### Deploy via CLI

1. Install the Netlify CLI (already included in devDependencies)
   ```bash
   npm install
   ```

2. Login to Netlify CLI
   ```bash
   npx netlify login
   ```

3. Initialize Netlify site (first time only)
   ```bash
   npx netlify init
   ```

4. Deploy to preview
   ```bash
   npm run deploy
   ```

5. Deploy to production
   ```bash
   npm run deploy:prod
   ```

## Environment Variables

Create a `.env` file based on `.env.example` and add your environment variables:

```
# Required variables
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id

# SEO variables
VITE_SITE_URL=https://laempresa.in
VITE_SITE_NAME=La Empresa
VITE_SITE_DESCRIPTION=Premium Full Stack Development Solutions
```

For Netlify deployment, add these environment variables in Netlify's dashboard under Site settings > Build & deploy > Environment.

## Development

1. Install dependencies
   ```bash
   npm install
   ```

2. Start development server
   ```bash
   npm run dev
   ```

3. Build for production
   ```bash
   npm run build
   ```

## SEO Optimization

This project includes several SEO optimization features:

- Structured data with Schema.org markup
- SEO component for all pages
- Optimized meta tags
- Sitemap.xml and robots.txt
- Optimized asset loading
- Fast page loads with code splitting
- Proper OpenGraph and Twitter card tags
- Semantic HTML structure

## Performance Optimization

- Image optimization with lazy loading
- CSS and JS minification
- Code splitting
- Preloading critical assets
- Tree shaking
- Service worker for offline support
- Font optimization with display swap
- Cache control headers

## Built With

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Helmet Async 
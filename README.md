# La Empresa - Web Development Agency

A modern, responsive website for La Empresa - a web development agency. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- Responsive design for all devices
- Dark/Light theme toggle
- Smooth animations with Framer Motion
- Contact form with EmailJS integration
- Multi-currency support
- Region detection based on timezone
- Fully responsive UI components

## 🔧 Tech Stack

- **React** - Frontend library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **EmailJS** - Contact form functionality
- **Vite** - Build tool

## 🚀 Live Demo

Visit the live site: [La Empresa](https://yourusername.github.io/la-empresa/)

## 📋 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/la-empresa.git
   cd la-empresa
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory with your EmailJS keys:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 🛠️ Deployment

### GitHub Pages Deployment

#### Automatic Deployment (via GitHub Actions)

1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically deploy your site to GitHub Pages.

#### Manual Deployment

You can also deploy manually using the gh-pages package:

1. Make sure you've updated the `vite.config.ts` file with your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

2. Run the deploy script:
   ```bash
   npm run deploy
   ```

### Environment Variables

For both deployment methods, add your EmailJS keys as secrets in your GitHub repository:
- Go to your GitHub repository
- Navigate to Settings > Secrets and variables > Actions
- Add the following repository secrets:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any questions or feedback, please reach out to us at laempresa.team@gmail.com.

## Security Improvements

### EmailJS Secure Implementation
- Credentials are now stored as environment variables and GitHub secrets
- No hardcoded credentials in the codebase
- Sensitive data is no longer visible in the browser

### Setup GitHub Secrets
To deploy this project, you need to set up the following GitHub secrets:

1. Go to your repository settings
2. Navigate to Secrets and Variables > Actions
3. Add the following repository secrets:
   - `EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## Performance Improvements

### Added loading states
- Added global loading state for initial page load
- Implemented lazy loading for all pages to reduce initial load time
- Added loading indicator for form submissions

### Code Optimization
- Removed hardcoded credentials in multiple files
- Implemented a dedicated email service for better code organization
- Improved form submission flow

## Local Development

1. Clone the repository
2. Create a `.env` file with your EmailJS credentials (see `.env.example`)
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Building for Production

```
npm run build
```

## Deployment

This project is configured to deploy to GitHub Pages automatically when pushing to the main branch. The deployment workflow uses GitHub Actions and is defined in `.github/workflows/deploy.yml`. 
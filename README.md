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

1. Update the `vite.config.ts` file with your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

2. Add your EmailJS keys as secrets in your GitHub repository:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Add the following repository secrets:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

3. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

4. GitHub Actions will automatically deploy your site to GitHub Pages.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any questions or feedback, please reach out to us at laempresa.team@gmail.com. 
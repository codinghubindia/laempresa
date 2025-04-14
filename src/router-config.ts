/**
 * React Router configuration with future flags
 * This addresses React Router v6 future flags warnings
 */

export const routerOptions = {
  future: {
    v7_startTransition: true,  // Opt-in to React 18's startTransition for page navigations
    v7_relativeSplatPath: true // Opt-in to v7 relative path resolution for splat routes
  }
}; 
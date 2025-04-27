import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  schema?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = 'https://laempresa.in/logo-large.png', 
  ogUrl = 'https://laempresa.in', 
  canonical,
  schema
}: SEOProps) => {
  const siteTitle = `${title} | La Empresa - Premium Digital Solutions`;
  
  // Default organization schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "La Empresa",
    "url": "https://laempresa.in",
    "logo": "https://laempresa.in/logo-large.png",
    "description": "Custom full stack development solutions including websites, web applications, e-commerce platforms, and digital products to transform your business.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/laempresa",
      "https://linkedin.com/company/laempresa",
      "https://github.com/laempresa"
    ]
  };

  // Use custom schema if provided, otherwise use default
  const structuredData = schema || defaultSchema;
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="La Empresa" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1C1C1E" />
      <meta name="author" content="La Empresa" />
      
      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 
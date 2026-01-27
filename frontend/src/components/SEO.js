import { useEffect } from 'react';

/**
 * SEO Component - Uses direct DOM manipulation for reliable meta tag updates
 * This is more reliable than react-helmet/react-helmet-async in some React setups
 */
function SEO({ title, description, keywords, ogImage, ogTitle, ogDescription, canonicalUrl }) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tag
    const updateMeta = (selector, content) => {
      if (!content) return;
      
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (selector.includes('name=')) {
          meta.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('property=')) {
          meta.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update meta tags
    updateMeta('meta[name="description"]', description);
    updateMeta('meta[name="keywords"]', keywords);
    updateMeta('meta[property="og:title"]', ogTitle || title);
    updateMeta('meta[property="og:description"]', ogDescription || description);
    updateMeta('meta[property="og:image"]', ogImage);
    
    // Update or create canonical link
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Cleanup function - reset to defaults on unmount (optional)
    return () => {
      // We don't reset on unmount since the next page will set its own values
    };
  }, [title, description, keywords, ogImage, ogTitle, ogDescription, canonicalUrl]);

  return null; // This component doesn't render anything
}

export default SEO;

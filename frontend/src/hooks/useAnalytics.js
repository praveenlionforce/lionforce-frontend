import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Generate or retrieve visitor ID from localStorage
const getVisitorId = () => {
  const storageKey = 'lionforce_visitor_id';
  let visitorId = localStorage.getItem(storageKey);
  
  if (!visitorId) {
    visitorId = 'v_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(storageKey, visitorId);
  }
  
  return visitorId;
};

// Track a single page view
const trackPageView = async (page) => {
  try {
    const visitorId = getVisitorId();
    
    const payload = {
      visitor_id: visitorId,
      page: page,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
      screen_width: window.screen.width,
      screen_height: window.screen.height
    };
    
    await fetch(`${API_URL}/api/analytics/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    // Analytics should never break the app
    console.debug('Analytics tracking error:', error);
  }
};

// Custom hook to track page views on route changes
const useAnalytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Don't track admin pages
    if (location.pathname.startsWith('/admin')) {
      return;
    }
    
    trackPageView(location.pathname);
  }, [location.pathname]);
};

export default useAnalytics;
export { trackPageView, getVisitorId };

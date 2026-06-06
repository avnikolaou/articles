'use client';

import { useEffect, useState } from 'react';

import { GoogleAnalytics } from '@next/third-parties/google';

const STORAGE_KEY = 'cookie-consent';

const AnalyticsLoader = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem(STORAGE_KEY);
      setEnabled(consent === 'accepted');
    };

    checkConsent();

    window.addEventListener('cookie-consent-granted', checkConsent);

    return () => {
      window.removeEventListener('cookie-consent-granted', checkConsent);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />;
};

export default AnalyticsLoader;

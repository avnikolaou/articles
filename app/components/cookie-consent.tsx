'use client';

import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'cookie-consent';

const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener('cookie-consent-granted', callback);
  window.addEventListener('cookie-consent-denied', callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('cookie-consent-granted', callback);
    window.removeEventListener('cookie-consent-denied', callback);
  };
};

const getSnapshot = () => {
  return localStorage.getItem(STORAGE_KEY);
};

const subscribeHydration = () => {
  return () => {};
};

const getHydrationSnapshot = () => {
  return true;
};

const getHydrationServerSnapshot = () => {
  return false;
};

export const CookieConsent = () => {
  const isHydrated = useSyncExternalStore(subscribeHydration, getHydrationSnapshot, getHydrationServerSnapshot);
  const consent = useSyncExternalStore(subscribe, getSnapshot, () => null);

  if (!isHydrated) {
    return null;
  }

  if (consent) {
    return null;
  }

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    window.dispatchEvent(new Event('cookie-consent-granted'));
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    window.dispatchEvent(new Event('cookie-consent-denied'));
  };

  return (
    <div className="fixed right-4 bottom-4 left-4 z-50">
      <div className="bg-background mx-auto max-w-3xl rounded-lg border p-4 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground text-sm">
            This site uses analytics cookies to understand how visitors use the website.
          </p>

          <div className="flex gap-2">
            <button onClick={decline} className="rounded-md border px-4 py-2 text-sm">
              Decline
            </button>

            <button onClick={accept} className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

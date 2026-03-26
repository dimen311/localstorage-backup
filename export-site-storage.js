// Paste this script in dev tools console on the site you want to copy from.
// It will log a restore script, copy it and run it later to restore everything.

(function exportSiteStorage() {
  const data = {
    localStorage: {},
    sessionStorage: {},
    cookies: document.cookie,
  };

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data.localStorage[key] = localStorage.getItem(key);
  }

  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    data.sessionStorage[key] = sessionStorage.getItem(key);
  }

  const json = JSON.stringify(data);

  const restoreScript = `
// Paste this in dev tools console to restore all storage for: ${location.origin}
(function restoreSiteStorage() {
  const data = ${json};

  localStorage.clear();
  Object.entries(data.localStorage).forEach(([k, v]) => localStorage.setItem(k, v));
  console.log('localStorage restored:', Object.keys(data.localStorage).length, 'keys');

  sessionStorage.clear();
  Object.entries(data.sessionStorage).forEach(([k, v]) => sessionStorage.setItem(k, v));
  console.log('sessionStorage restored:', Object.keys(data.sessionStorage).length, 'keys');

  data.cookies.split('; ').filter(Boolean).forEach(c => { document.cookie = c; });
  console.log('cookies restored');
})();
`;

  console.log(restoreScript);
  copy(restoreScript);
  console.log('--- Restore script copied to clipboard! ---');
})();
 

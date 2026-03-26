# Export Site Storage

A dev tools script that captures all browser storage (localStorage, sessionStorage, cookies) for the current site and generates a restore script.

## Usage

### Export

1. Open Chrome DevTools on the target site
2. Paste the contents of `export-site-storage.js` into the Console
3. The restore script is automatically copied to your clipboard

### Restore

1. Open Chrome DevTools on the same site (can be a different session/browser)
2. Paste the restore script from your clipboard into the Console
3. All storage keys and cookies are restored

## What gets captured

- **localStorage** — all key-value pairs
- **sessionStorage** — all key-value pairs
- **cookies** — all cookies accessible via `document.cookie`

## Notes

- The `copy()` function only works in Chrome/Edge DevTools. If it's unavailable, the restore script is also printed to the console — right-click the output and select "Copy string contents".
- HttpOnly cookies are not accessible via `document.cookie` and won't be captured.
- Restore clears existing localStorage and sessionStorage before writing, so any keys not in the backup will be removed.

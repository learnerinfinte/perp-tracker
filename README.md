# perp-tracker
this is my project file 
#  SDE Prep — Progress Tracker

A standalone, local-first study and career tracker rebuilt from the supplied HTML app.

## Data persistence and safety

- Existing data keys `sdeTrackerData` and `sdeTrackerName` are preserved. The app reads the existing JSON structure without resetting it.
- Changes autosave to browser local storage. Data is scoped to the browser profile and site origin; changing browser, profile, or server address can make it appear missing.
- Use **Export backup** regularly. The JSON backup can be restored with **Import backup**. Import replaces the current data only after confirmation.
- Clearing browser data can erase local storage. Keep a backup somewhere safe.

## Included modules

- `index.html` — app layout and views
- `css/style.css` — responsive styling
- `js/app.js` — dashboard, daily logs, calendar, DSA, Python, projects, reports, roadmap and career logic
- `js/storage.js` — guarded persistence adapter with legacy-key compatibility

Career vacancy matching is based only on requirements entered by you; it does not automatically discover live job openings.

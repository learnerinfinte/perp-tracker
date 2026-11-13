// Persistent storage adapter. Keeps the legacy keys and JSON shape compatible.
const DATA_KEY = "sdeTrackerData";
const NAME_KEY = "sdeTrackerName";
let memoryFallback = null;

export function loadData(defaults) {
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (raw) { const parsed = JSON.parse(raw); if (parsed && typeof parsed === "object") return parsed; }
  } catch (error) { console.warn("Could not read saved tracker data:", error); }
  return memoryFallback || defaults();
}

export function persistData(data) {
  memoryFallback = data;
  try {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Tracker save failed:", error);
    const status = document.getElementById("storageStatus");
    if (status) status.textContent = "Browser storage unavailable — export a backup before closing this tab.";
    return false;
  }
}

export function saveName(name) {
  try { localStorage.setItem(NAME_KEY, name); return true; }
  catch (error) { console.warn("Could not save profile name:", error); return false; }
}

export function getSavedName() {
  try { return localStorage.getItem(NAME_KEY) || ""; }
  catch (error) { return ""; }
}

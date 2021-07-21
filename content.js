// This runs inside the active webpage
// FULL ACCESS to the DOM and Browser APIs

// Message API
const messageBackground = async ({ name, payload }, cb) => {
  await chrome.runtime.sendMessage({ name, payload }, cb)
}

// Set all variables through messaging, where it will be preserved in localStorage
const messageSetLocal = (key, val, handleResponse) => {
  messageBackground({ name: 'setLocal', payload: { key, val }}, handleResponse)
}

// Mock getting data from window object
window.env = 'prod'
// Get env data
const env = window.env
// Update localStorage via messaging
messageSetLocal('env', env)
// then, update badge state via messaging, based on localStorage
// will need to ensure that this runs on every page load, to catch env changes
messageBackground({ name: 'updateBadgeEnv' })

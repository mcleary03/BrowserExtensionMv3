
export const getLocal = (key, respond) => chrome.storage.local.get([key], respond)
export const setLocal = ({key, val}, respond) => chrome.storage.local.set({ [key]: val }, respond)

// This file is run as a Service Worker
// and has access to serviceWorker APIs

// IMPORTANT! Wrap imported module use in try/catch blocks to AVOID TOTAL FAILURE due to an error in a module
import { getLocal, setLocal } from './scripts/localStorage.js'
import { updateEnvBadge } from './scripts/badgeEnv.js'

// MESSAGING LISTENERS, THERE CAN BE ONLY ONE! 
// Really, a second message listener would negate this one ☠️
chrome.runtime.onMessage.addListener(({ name, payload }, sender, respond) => {
  switch(name) {
    case 'setLocal': {
      try { setLocal(payload, respond)}
      catch(e) { console.error(e) }
      break
    }
    case 'getEnv': {
      try { getLocal('env', ({ env }) => respond(env)) }
      catch(e) { console.error(e) }
      break
    }
    case 'updateBadgeEnv': {
      try { getLocal('env', ({ env }) => updateEnvBadge(env)) }
      catch(e) { console.error(e) }
      break
    }
    default: console.error(`Invalid Message Recieved\nsender:${sender}\npayload:${payload}`)
  }
  return true // `return true` makes this asynchronous
})
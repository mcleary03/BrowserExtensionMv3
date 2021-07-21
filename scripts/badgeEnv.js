export const environments = {
  prod: { text: 'PROD', color: '#c00' },
  qa:   { text: 'QA',   color: '#00c' },
  dev:  { text: 'DEV',  color: '#0c0' }
}

const updateBadgeColor = env => chrome.action.setBadgeBackgroundColor({ color: environments[env].color })

const updateBadgeText = env => chrome.action.setBadgeText({ text: environments[env].text });

export const updateEnvBadge = env => {
  updateBadgeColor(env)
  updateBadgeText(env)
}

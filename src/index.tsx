import React from 'react'
import { render } from 'react-dom'
import { Config } from './types/global'

// Init global config
window.reapit = {
  config: {
    appEnv: 'local',
    connectClientId: '',
    connectOAuthUrl: '',
    connectUserPoolId: '',
    platformApiUrl: '',
    marketplaceUrl: '',
  },
}

export const renderApp = (Component: React.ComponentType) => {
  const rootElement = document.querySelector('#root') || document.body
  const isDesktop = Boolean(window['__REAPIT_MARKETPLACE_GLOBALS__'])
  const html = document.querySelector('html')
  if (isDesktop && html) {
    html.classList.add('is-desktop')
  }

  if (rootElement) {
    render(<Component />, rootElement)
  }
}

const run = async () => {
  try {
    // Set the global config
    window.reapit.config = {
      appEnv: process.env.REACT_APP_ENV || 'local',
      connectClientId: process.env.REACT_APP_CONNECT_CLIENT_ID || '',
      connectOAuthUrl: 'https://connect.reapit.cloud',
      connectUserPoolId: process.env.REACT_APP_CONNECT_USER_POOL_ID || '',
      platformApiUrl: 'https://platform.reapit.cloud',
    } as Config

    // I import the app dynamically so that the config is set on window and I avoid any
    // runtime issues where config is undefined
    const { default: App } = await import('./core/app')

    renderApp(App)
  } catch (error) {
    console.error('Cannot fetch config', error)
  }
}

run()

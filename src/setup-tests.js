import './test-servers'
import '@testing-library/jest-dom/extend-expect'

jest.mock('@linaria/core', () => {
  return {
    css: jest.fn(() => ''),
    cx: jest.fn(() => ''),
  }
})
Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: jest.fn(),
      includes: jest.fn(),
    },
    assign: jest.fn(),
  },
  writable: true,
})

Object.defineProperty(window, 'reapit', {
  value: {
    config: {
      connectClientId: 'SOME_CLIENT_ID',
      connectOAuthUrl: 'SOME_OAUTH_URL',
    },
  },
})

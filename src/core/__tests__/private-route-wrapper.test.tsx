import * as React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { PrivateRouteWrapper } from '../private-route-wrapper'
import { NavStateProvider } from '@reapit/elements'

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as Object),
  useLocation: jest.fn(() => ({ pathname: '/test' })),
}))

jest.mock('@reapit/connect-session', () => ({
  ReapitConnectBrowserSession: jest.fn(),
  useReapitConnect: () => ({
    connectSession: {},
    connectInternalRedirect: '',
  }),
}))

describe('PrivateRouter', () => {
  it('should match a snapshot', () => {
    expect(
      render(<PrivateRouteWrapper />, {
        wrapper: ({ children }) => (
          <NavStateProvider>
            <Router history={createBrowserHistory()}>{children}</Router>
          </NavStateProvider>
        ),
      }).asFragment(),
    ).toMatchSnapshot()
  })
})

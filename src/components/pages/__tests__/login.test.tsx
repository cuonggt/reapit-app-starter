import * as React from 'react'
import { render } from '@testing-library/react'
import { reapitConnectBrowserSession } from '../../../core/connect-session'
import { Login } from '../login'

jest.mock('../../../core/connect-session', () => ({
  reapitConnectBrowserSession: {
    connectLoginRedirect: jest.fn(),
  },
}))

describe('Login', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('loginHandler', () => {
  it('should correctly call redirect on click', () => {
    const { getByText } = render(<Login />)

    getByText('Login').click()
    expect(reapitConnectBrowserSession.connectLoginRedirect).toHaveBeenCalledTimes(1)
  })
})

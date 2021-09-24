import * as React from 'react'
import { render } from '@testing-library/react'
import { Nav } from '../nav'
import { NavStateProvider } from '@reapit/elements'

describe('Nav', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<Nav />, {
      wrapper: ({ children }) => <NavStateProvider>{children}</NavStateProvider>,
    })
    expect(asFragment()).toMatchSnapshot()
  })
})

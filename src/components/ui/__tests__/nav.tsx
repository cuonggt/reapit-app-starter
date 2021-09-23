import * as React from 'react'
import { render } from '@testing-library/react'
import { Nav } from '../nav'

describe('Nav', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<Nav />)
    expect(asFragment()).toMatchSnapshot()
  })
})

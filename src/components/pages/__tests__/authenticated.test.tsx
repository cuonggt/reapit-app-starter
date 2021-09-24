import * as React from 'react'
import { render } from '@testing-library/react'
import Authenticated from '../authenticated'

describe('Authenticated', () => {
  it('should match a snapshot', () => {
    expect(render(<Authenticated />).asFragment()).toMatchSnapshot()
  })
})

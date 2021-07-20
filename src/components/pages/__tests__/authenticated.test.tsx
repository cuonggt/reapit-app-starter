import * as React from 'react'
import Authenticated from '../authenticated'
import { render } from '@testing-library/react'

describe('Authenticated', () => {
  it('should match a snapshot', () => {
    expect(render(<Authenticated />).asFragment()).toMatchSnapshot()
  })
})

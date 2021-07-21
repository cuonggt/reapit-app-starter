import * as React from 'react'
import { render as renderRtl } from '@testing-library/react'
import App from '../app'
import { render, unmountComponentAtNode } from 'react-dom'

jest.mock('../router')

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
    unmountComponentAtNode(div)
  })

  it('should match a snapshot', () => {
    expect(renderRtl(<App />).asFragment()).toMatchSnapshot()
  })
})

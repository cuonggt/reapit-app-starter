import * as React from 'react'
import { ErrorBoundary } from '../error-boundary'
import { render } from '@testing-library/react'

const Component: React.FC = () => <div>I am a component!</div>
Component.displayName = 'Component'

const props = {
  children: Component,
}

describe('ErrorBoundary', () => {
  it('should match a snapshot when no error', () => {
    const { asFragment } = render(<ErrorBoundary {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should match a snapshot when has an error', () => {
    const ErrorComponent = () => {
      throw new Error('Some thing went wrong')
    }
    const { asFragment } = render(
      <ErrorBoundary {...props}>
        <ErrorComponent />
      </ErrorBoundary>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})

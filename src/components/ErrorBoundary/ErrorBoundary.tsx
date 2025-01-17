import React from 'react'
import { ErrorPage } from '../ErrorPage'
import { ErrorBoundaryProps, ErrorInfo, ErrorBoundaryState } from './types'
import { reportErrorToSentry } from './reportErrorToSentry'
import { withTranslation } from 'next-i18next'

// https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      info: null,
    }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState((state) => ({
      ...state,
      error,
      info,
    }))
    reportErrorToSentry(error, info)
    const { onError } = this.props
    if (onError) onError(error)
  }

  render(): React.ReactNode {
    const { hasError, error, info } = this.state
    const { children } = this.props
    const showStack =
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_AWELL_ENVIRONMENT === 'staging'

    if (hasError) {
      if (showStack) {
        return (
          <article style={{ whiteSpace: 'pre-wrap' }}>
            <ErrorPage title={this.props.t('errors.app_error')}>
              <div>{error?.toString()}</div>
              {showStack && <div>{info?.componentStack}</div>}
            </ErrorPage>
          </article>
        )
      }
      return <ErrorPage title={this.props.t('errors.app_error')} />
    }

    return (
      <div id="error-boundary" style={this.props.style}>
        {children}
      </div>
    )
  }
}

export default withTranslation()(ErrorBoundary)

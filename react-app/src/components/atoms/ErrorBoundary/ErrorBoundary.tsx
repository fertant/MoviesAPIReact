import React, { ErrorInfo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): IState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (<h1>Something went wrong.</h1>);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

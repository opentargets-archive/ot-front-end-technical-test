import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <>
                <h1>Something went wrong</h1>
                <p>Please, try to reload this page or contact with the technical support</p>
            </>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

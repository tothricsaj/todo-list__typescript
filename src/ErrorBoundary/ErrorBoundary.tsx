import * as React from 'react'

interface Props {
    children: React.ReactChild | React.ReactChildren
}

interface State {
    hasError: boolean,
    errorMsg: string
}

export default class ErrorBoundary extends React.Component<Props, State> {

    state: State = {
        hasError: false,
        errorMsg: ''
    }

    componentDidCatch = (error: any, info: any) => {
        this.setState({hasError: true, errorMsg: error})
    }

    render() {
        console.log('hasError: ', this.state.hasError)
        if (this.state.hasError) {
            return <h1>{this.state.errorMsg}</h1>
        } else {
            return (
                <>
                {this.props.children}
                </>
            )
        }
    }

}
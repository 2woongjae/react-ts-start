import * as React from 'react';

interface AppProps {
    name: string;
}

export class App extends React.Component<AppProps, {}> {
    render() {
        console.error('Test');
        return <h1>Hello {this.props.name}</h1>;
    }
}
import * as React from 'react';
import {Button} from 'react-bootstrap';

export interface AppProps {
    name: string;
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
<div>
    <h1>Hello {this.props.name}</h1>
    <Button bsStyle="primary">Primary</Button>
</div>
);

    }
}
import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import {App, AppProps} from './components/App';

const props: AppProps = {
    name: 'TypeScript'
};

ReactDom.render(
    <App {...props} />,
    document.querySelector('#app')
);
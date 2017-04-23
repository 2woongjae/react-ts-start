import * as React from 'react';
import * as ReactDom from 'react-dom';

import {App} from './components/App';

ReactDom.render(
    <App name="TypeScript" />,
    document.querySelector('#app')
);
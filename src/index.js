import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'flexboxgrid2/flexboxgrid2.css';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

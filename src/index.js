import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
// import Main from './containers/main'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(<HashRouter><Routes /></HashRouter>, document.getElementById('root'));
registerServiceWorker();

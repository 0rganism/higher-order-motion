import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Demo/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

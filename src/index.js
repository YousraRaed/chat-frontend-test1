import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import  '../node_modules/@fortawesome/react-fontawesome';
import '../node_modules/@fortawesome/fontawesome-free-solid'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

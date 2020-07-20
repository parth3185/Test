import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter> <App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();


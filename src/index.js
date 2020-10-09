import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
     
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li style={{float:"right"}}>
              <Link to="/console">Console</Link>
              
            </li>
          </ul>
          
        <Main />
      </div>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

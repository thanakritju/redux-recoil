import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRecoil from './AppRecoil';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  RecoilRoot
} from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/redux">
            <App />
          </Route>
          <Route path="/recoil">
            <RecoilRoot>
              <AppRecoil />
            </RecoilRoot>
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

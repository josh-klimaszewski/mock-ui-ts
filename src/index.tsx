import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Accounting from './pages/Accounting';
import ConnectedApps from './pages/ConnectedApps';
import Dashboard from "./pages/Dashboard";
import Invoices from './pages/Invoices';
import PayBills from './pages/PayBills';
import Reports from './pages/Reports';
import Settings from './pages/Settings';


const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Nav />
          <Switch>
          <Route path="/accounting" component={Accounting} />
          <Route path="/connectedapps" component={ConnectedApps} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/paybills" component={PayBills} />
          <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

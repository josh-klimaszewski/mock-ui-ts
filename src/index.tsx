import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from './reducers';

import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// import * as promise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';


import './index.css';

import Dashboard from './pages/Dashboard';

const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();

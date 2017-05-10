import React from 'react';
import ReactDOM from 'react-dom';
import prisonerCollection from './prisonerCollection.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import ViewToggle from './components/ViewToggle';
import './index.css';

// var browserHistory = ReactRouter.browserHistory;
// var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ViewToggle />
  </Provider>,
  document.getElementById('root')
);

//
//
// ReactDOM.render(
//   <ViewToggle prisoners={prisonerCollection}/>,
//   document.getElementById('root')
// );
//
// ReactDOM.render((
//   <Router>
//     <Route path="/" component={Home} />
//   </Router>
// ), document.getElementById('root'));
//

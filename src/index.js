import React from 'react';
import ReactDOM from 'react-dom';
import prisonerCollection from './prisonerCollection.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()



import LandingPage from './components/LandingPage';
import ViewToggle from './components/ViewToggle';
import './index.css';

// var browserHistory = ReactRouter.browserHistory;
// var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <div>
      <Route path="/" component={LandingPage}/>
        <Route path="/filter" component={ViewToggle} />

    </div>
  </Router>
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

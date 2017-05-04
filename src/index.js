import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import prisonerCollection from './prisonerCollection.js';
//

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';

import ViewToggle from './components/ViewToggle';
// import 'spectre.css/dist/spectre.min.css';
import './index.css';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

//
//
ReactDOM.render(
  <ViewToggle prisoners={prisonerCollection}/>,
  document.getElementById('root')
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// pull in the ag-grid styles we're interested in
import '../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../node_modules/ag-grid/dist/styles/theme-fresh.css';
import { createStore, combineReducers } from 'redux';
import App from './components/app';
import Reducers from './reducers/reducer_books';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({bookReducer: Reducers});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

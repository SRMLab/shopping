import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import InventoryListContainer from './containers/InventoryListContainer'
import NewInventoryItem from './containers/NewInventoryItem'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()
render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home} />
          <Route path="inventory">
            <IndexRoute component={InventoryListContainer} />
            <Route path="new" component={NewInventoryItem} />
          </Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

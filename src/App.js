import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import InventoryListContainer from './containers/InventoryListContainer'
import InventoryItemForm from './containers/InventoryItemForm'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={MainLayout}>
              <IndexRoute component={Home} />
              <Route path="inventory">
                <IndexRoute component={InventoryListContainer} />
                <Route path="new" component={InventoryItemForm} />
                <Route path=":id" component={InventoryItemForm} />
              </Route>
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;

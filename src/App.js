import React, { Component } from 'react';
import InventoryListContainer from './containers/InventoryListContainer'
import NewInventoryItem from './containers/NewInventoryItem'
import Header from './components/Header'
import Icon from './components/Icon'
import { ICONS } from './constants'

class App extends Component {
  render() {
    const addIcon = <Icon icon={ ICONS.PLUS } />
    return (
      <div>
        <Header title='Inventory Item' right={ addIcon } left='Cancel'/>
      </div>
    );
  }
}

export default App;

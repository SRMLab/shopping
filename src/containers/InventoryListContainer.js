import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInventoryItems } from '../actions'
import Header from '../components/Header';
import InventoryItemList from '../components/InventoryItemList';
import { browserHistory } from 'react-router'
// import Icon from '../components/Icon'
// import { ICONS } from '../constants'

class InventoryListContainer extends Component {
  componentDidMount(){
    this.props.fetchInventoryItems()
  }
  render(){
    // const addIcon = <Icon icon={ ICONS.PLUS } />
    return (
      <div>
        <Header title='Inventory List' right='New'
          onClickRight={()=> browserHistory.push('/inventory/new')}
        />
        <InventoryItemList inventory={this.props.inventoryItems}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inventoryItems: state.inventory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInventoryItems: () => dispatch(fetchInventoryItems())
  }
}

InventoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryListContainer)

export default InventoryListContainer;

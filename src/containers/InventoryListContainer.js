import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInventoryItems } from '../actions/inventory'
import Header from '../components/Header';
import InventoryItemList from '../components/InventoryItemList';
import { browserHistory } from 'react-router'

import { orderBy, groupBy } from '../helpers'

// import Icon from '../components/Icon'
// import { ICONS } from '../constants'

const styles = {
  header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
  },
  body: {
    marginTop: '65px'
  }
};

class InventoryListContainer extends Component {
  componentDidMount(){
    // if (this.props.inventory.items.length < 1) this.props.fetchInventoryItems();
  }
  handleOnItemClick(id){
    console.log(id)
    browserHistory.push('/inventory/'+id)
  }
  render(){
    // const addIcon = <Icon icon={ ICONS.PLUS } />
    const items = groupBy(this.props.items, 'category')
    console.log(items)
    return (
      <div>
        <Header title='Inventory List' right='New'
          onClickRight={()=> browserHistory.push('/inventory/new')}
          style={styles.header}
        />
        <div style={styles.body}>
          <InventoryItemList items={items} onItemClick={this.handleOnItemClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.inventory.items
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInventoryItems } from '../actions'
import Header from '../components/Header';
import InventoryItemList from '../components/InventoryItemList';
import { browserHistory } from 'react-router'
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
    if (this.props.inventory.items.length < 1)
      this.props.fetchInventoryItems();
  }
  render(){
    // const addIcon = <Icon icon={ ICONS.PLUS } />
    return (
      <div>
        <Header title='Inventory List' right='New'
          onClickRight={()=> browserHistory.push('/inventory/new')}
          style={styles.header}
        />
        <div style={styles.body}>
          <InventoryItemList inventory={this.props.inventory} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inventory: state.inventory
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

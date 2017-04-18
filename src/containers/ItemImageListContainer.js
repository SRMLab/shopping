import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInventoryItems, fetchItemImages } from '../actions'
import Header from '../components/Header';
import InventoryItemList from '../components/InventoryItemList';
import ItemImageList from '../components/ItemImageList';
import { browserHistory } from 'react-router'
// import Icon from '../components/Icon'
// import { ICONS } from '../constants'

class ItemImageListContainer extends Component {
  componentDidMount(){
    this.props.fetchItemImages()
  }
  render(){
    // const addIcon = <Icon icon={ ICONS.PLUS } />
    return (
      <div>
        <Header title='Item Image List' right='New'
        />
        <ItemImageList images={this.props.itemImages}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemImages: state.inventoryItems.itemImages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItemImages: () => dispatch(fetchItemImages())
  }
}

ItemImageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemImageListContainer)

export default ItemImageListContainer;

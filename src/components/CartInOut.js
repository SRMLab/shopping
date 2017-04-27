import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

class CartInOut extends Component {
  constructor(){
    super();
    this.state = {
      checked: false
    }
  }
  render(){
    return (
      <Checkbox
      checkedIcon={<AddShoppingCart />}
      uncheckedIcon={<ShoppingCart />}
      onCheck={(e, checked) => {
        console.log("Onchecked", checked)}
      }
    />
    )
  }
}

export default CartInOut;
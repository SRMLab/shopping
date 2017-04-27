import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import CartInOut from './CartInOut';

const styles = {
  thumbnail: {
    borderRadius: '10px',
    height: '50px',
    width: '50px',
    objectFit: 'cover',
    top: '11px',
    left: '11px',
    position: 'Absolute',
  },
  subheader: {
    backgroundColor: '#333',
    color: '#eee',
    lineHeight: '200%'
  }
}

const InventoryItemGroup = ({group, ...props}) => {
  // const checkbox = (
  //   <Checkbox
  //     checkedIcon={<AddShoppingCart />}
  //     uncheckedIcon={<ShoppingCart />}
  //     onCheck={(e, checked) => {
  //       console.log("Onchecked", checked)}
  //     }
  //     item={item}
  //   />
  // );
  return (
    <div>
      { group.map((item, index) => {
        const shop = item.shops[0] || '';
        return (
          <div key={index}>
            <ListItem 
              leftAvatar={<Avatar src={item.imagePath} style={styles.thumbnail} />}
              primaryText={item.name}
              secondaryText={`${item.secondName} ${shop}`}
              rightIcon={
                <Checkbox
                  checkedIcon={<AddShoppingCart />}
                  uncheckedIcon={<ShoppingCart />}
                  onCheck={(e, checked) => {
                    console.log("Onchecked", checked, item)}
                  }
                />
              }
              {...props}
            />
            <Divider />
          </div>
          )
        })
      }
    </div>
  )
}


const InventoryItemList = ({inventory, ...props}) => {
  return (
    <div>
    { inventory.isFetching && <h3>Loading</h3> }
    { Object.keys(inventory.items).map((group, index) => {
      return (
        <List key={index}>
          <Subheader style={styles.subheader}>{group.toUpperCase()}</Subheader>
          <InventoryItemGroup group={inventory.items[group]}  />
        </List>
      )})
    }
    </div>
  )
}

export default InventoryItemList;

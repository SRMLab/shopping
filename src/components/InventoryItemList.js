import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import _ from 'lodash'

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

const checkbox = (item) => (
  <Checkbox
    checkedIcon={<AddShoppingCart />}
    uncheckedIcon={<ShoppingCart />}
    onCheck={(e, checked) => {
      console.log("Onchecked", checked, item)}
    }
    onClick={(e) => e.stopPropagation()}
  />
);

const InventoryItemGroup = ({group, onItemClick}) => {
  return (
    <div>
      { _.map(group, (item, id) => {
        const shop = item.shops || '';
        return (
          <div key={id} >
            <ListItem 
              leftAvatar={<Avatar src={item.image} style={styles.thumbnail} />}
              primaryText={item.name}
              secondaryText={`${item.secondName} ${shop}`}
              rightIcon={checkbox(item)}
              onClick={(e) => onItemClick(id)}
            />
            <Divider />
          </div>
          )
        })
      }
    </div>
  )
}


const InventoryItemList = ({items, onItemClick}) => {
  return (
    <div>
    { Object.keys(items).map((group, index) => {
      return (
        <List key={index}>
          <Subheader style={styles.subheader}>{group.toUpperCase()}</Subheader>
          <InventoryItemGroup group={items[group]} onItemClick={onItemClick} />
        </List>
      )})
    }
    </div>
  )
}

export default InventoryItemList;

    // { inventory.isFetching && <h3>Loading</h3> }

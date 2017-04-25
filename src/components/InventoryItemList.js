import React from 'react';
import ListItemView from '../components/ListItemView';
import _ from 'underscore'

const InventoryItemList = ({inventory, ...props}) => {
  return (
    <div>
    { inventory.isFetching && <h3>Loading</h3> }
    { _.map(inventory.items, (item, index) => (
      <ListItemView key={index}
        imagePath={item.imagePath}
        primaryText={item.name}
        secondaryText={`${item.secondName} ${item.shops[0]} ${item.category}`}
        {...props}
      />
    ))}
    </div>
  )
}

export default InventoryItemList;

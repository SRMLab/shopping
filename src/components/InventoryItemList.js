import React from 'react';
import ListItemView from '../components/ListItemView';
import _ from 'underscore'

const InventoryItemList = ({items}) => {
  return (
    <div>
    { items.isFetching && <h3>Loading</h3> }
    { _.map(items.data, (item, index) => (
      <ListItemView key={index}
        imagePath={item.image}
        primaryText={item.name}
        secondaryText={item.unit + ' ' + item.id + ' ' + item.group}
      />
    ))}
    </div>
  )
}

export default InventoryItemList;
// <button onClick={() => props.fetchData()}>
//   <Icon icon={ ICONS.PLUS } />
//   Reload
// </button>

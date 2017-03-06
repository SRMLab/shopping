import React from 'react';
import ListItemView from '../components/ListItemView';

const InventoryItemList = ({items}) => {
  const imageDir = "/items/"
  return (
    <div>
    { items.isFetching && <h3>Loading</h3> }
    { items.data.map((item, index) => (
      <ListItemView
        imagePath={imageDir + item.imagePath}
        primaryText={item.name}
        secondaryText={item.unit + ' ' + item._store}
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

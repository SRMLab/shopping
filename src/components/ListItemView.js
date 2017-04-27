import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

const imageSize = '50px'
const ItemView = ({imagePath, primaryText, secondaryText, ...props}) => {
  const styles = {
    thumbnail: {
      borderRadius: '10px',
      height: imageSize,
      width: imageSize,
      objectFit: 'cover',
      top: '11px',
      left: '11px',
    }
  }
  const checkbox = (
    <Checkbox
      checkedIcon={<AddShoppingCart />}
      uncheckedIcon={<ShoppingCart />}
      onCheck={(e, checked) => {
        console.log("Onchecked", checked)}
      }
    />
  );
  return (
    <div>
      <ListItem
        leftAvatar={<img style={styles.thumbnail} src={imagePath} alt='' />}
        primaryText={primaryText}
        secondaryText={secondaryText}
        rightIcon={checkbox}
        {...props}
      />
      <Divider />
    </div>
  );
}

ItemView.propTypes = {
  imagePath: PropTypes.string,
}

ItemView.defaultProps = {
  imagePath: 'noImage.jpg',
}

export default ItemView;

import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

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
  return (
    <div>
      <ListItem
        leftAvatar={<img style={styles.thumbnail} src={imagePath} alt='' />}
        primaryText={primaryText}
        secondaryText={secondaryText}
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

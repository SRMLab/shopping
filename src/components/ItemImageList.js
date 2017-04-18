import React from 'react';
import ListItemView from '../components/ListItemView';
import _ from 'underscore'

const imageSize = '100px'
const styles = {
	thumbnail: {
		borderRadius: '10px',
		height: imageSize,
		width: imageSize,
		objectFit: 'cover',
		margin: '5px',
	},
	container: {
		padding: '10px',
		textAlign: 'center',
	},
	thumbnailContainer: {
		fontSize: '11px',
		float: 'left',
	}
}

const ItemImageList = ({images}) => {
  return (
		<div style={styles.container}>
    { _.map(images, (image, index) => (
			<div style={styles.thumbnailContainer} key={index}>
				<img 
					src={image.url}
					alt={image.filename}
					style={styles.thumbnail}
				/>
				<div>{image.filename}</div>
			</div>
    ))}
    </div>
  )
}

export default ItemImageList;
// <button onClick={() => props.fetchData()}>
//   <Icon icon={ ICONS.PLUS } />
//   Reload
// </button>

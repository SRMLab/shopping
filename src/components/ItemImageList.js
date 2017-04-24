import React from 'react';

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

const ItemImageList = ({images, onClick}) => {
  return (
	<div style={styles.container}>
    { images.map((image, index) => (
			<div style={styles.thumbnailContainer} key={index} 
				onClick={(e) => {
					e.preventDefault();
					return onClick(image);
				}}>
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

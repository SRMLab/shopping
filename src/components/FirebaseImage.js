import React, { Component } from 'react';
import { storage } from '../actions/firebaseServices'
const storageRef = storage.ref('itemImages')
// Cache for image urls. key: image path, value: image url
let cache = {};
// No image file if there is not a matching image on the storage
const NO_IMAGE = 'noImage.jpg';

class Image extends Component {
	state = {}

	componentWillMount() {
		const imageRef = storageRef.child(this.props.src+'.jpg')
		// If the image path is found in the cache, set url in state
		if (cache[imageRef.fullPath]) this.setState({url: cache[imageRef.fullPath]});
	}

	componentDidMount() {
		this.getDownloadURL(this.props.src)
			.then((url) => {
				this.setState({url: url});
			}, (err) => {
				console.log(err)
			})
	}

	getDownloadURL(imageName){
		return new Promise((resolve, reject) => {
			const imageRef = storageRef.child(imageName+'.jpg')
			if (!cache[imageRef.fullPath]) {
				imageRef.getDownloadURL()
					.then((url) => {
						cache[imageRef.fullPath] = url;
						return resolve(url);
					})
					.catch((err) => {
						if (err.code === 'storage/object-not-found'){
							if (cache[NO_IMAGE]) return resolve(cache[NO_IMAGE]);
							else {
								storageRef.child(NO_IMAGE).getDownloadURL()
									.then((url) => {
										cache[imageRef.fullPath] = url;
										cache[NO_IMAGE] = url;
										return resolve(url)
									})
							}
						}
						else return reject(err);
					})
			}
			return null;
		})
	}

	render() {
		return (<div><img {...this.props} src={this.state.url} alt='' /></div>);
	}
}

export default Image;
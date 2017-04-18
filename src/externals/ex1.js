import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-firebase-storage-connector';

type Props = {
  imageName?: string, // The name of the image that is used to obtain a download url from the storage
  imageURL?: string // The url that is obtained using the connector
  children?: any
};

const ContainerWithBackgroundImage = (props: Props) => (
  <div style={{background: `url(${props.imageURL})`}}>
    {props.children}
  </div>
);

// Define a function that maps a storage reference to a prop
const mapStorageToProps = (props: Props) => ({
  imageURL: props.imageName && firebase.storage().ref('images').child(props.imageName)
});

// Export the connected component
export default connect(mapStorageToProps)(ContainerWithBackgroundImage);
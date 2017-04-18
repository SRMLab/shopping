import React from 'react';
import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';

type Props = {
  username?: string, // The username, will be used as alt prop
  imageName?: string // The name of the image that is used to obtain a download url from the storage
};

const ProfilePicture = (props: Props) => (
  <ImageFromStorage
    storageRef={props.imageName && firebase.storage().ref('images').child(props.imageName)}
    alt={props.username}
  />
);

// Export the connected component
export default ProfilePicture;
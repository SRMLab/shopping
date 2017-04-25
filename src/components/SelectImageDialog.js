import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';

import Button from './Button'
import InputText from './InputText'

import ItemImageList from './ItemImageList';

const imageSize = '80%'
const styles = {
	thumbnail: {
		borderRadius: '10px',
		width: imageSize,
		margin: '5px',
	},
  container: {
    width: '100%',
    maxWidth: '1024px',
  }
}

class SelectImageDialog extends Component {
  state = {
    open: false,
    selectedImage: '',
  }

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  handleSelectedImage = (image) => {
    this.setState({selectedImage: image});
    this.handleClose()
    this.props.onChange(image.url)
  };

  componentDidMount(){
    // this.props.fetchItemImages()
  }
  render(){
    const actions = [
      <Button
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <Button
        label="Select"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <div onClick={this.handleOpen}>
          <InputText
                label='Select Image'
                value={this.state.selectedImage.filename}
                disabled={true}
              />
        </div>
        <Dialog
          title="Select image"
          actions={actions}
          modal={true}
          contentStyle={styles.container}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <ItemImageList images={this.props.itemImages} onClick={this.handleSelectedImage}/>
        </Dialog>
        <div style={{ textAlign: 'center' }}>
          <img style={styles.thumbnail} src={this.state.selectedImage.url} alt='' />
        </div>
      </div>
    )
  }
}

export default SelectImageDialog;

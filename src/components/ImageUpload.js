import React, { Component } from 'react'

const styles = {
  container: {
    paddingTop: '50px'
  },
  imagePreview: {
    maxWidth: '100%'
  }
}

const resize = (file, maxWidth, maxHeight, callback) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        var dataUrl = event.target.result;

        var image = new Image();
        image.src = dataUrl;
        image.onload = function () {
            var resizedDataUrl = resizeImage(image, maxWidth, maxHeight, 0.7);
            callback(resizedDataUrl);
        };
    };
}

const resizeImage = (image, maxWidth, maxHeight, quality) => {
    var canvas = document.createElement('canvas');

    var width = image.width;
    var height = image.height;

    if (width > height) {
        if (width > maxWidth) {
            height = Math.round(height * maxWidth / width);
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width = Math.round(width * maxHeight / height);
            height = maxHeight;
        }
    }

    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg", quality);
}

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let file = e.target.files[0];
    const maxWidth = 300;
    const maxHeight = 300;
    const self = this;
    resize(file, maxWidth, maxHeight, function (resizedDataUrl) {
      self.setState({ 
        file: file,
        imagePreviewUrl: resizedDataUrl 
      });
      self.props.onChange(resizedDataUrl)
    });
  }

  handleImageChange2(e) {
    e.preventDefault();

    let file = this.filesInput[0];
    console.log(file)
    const maxWidth = 300;
    const maxHeight = 300;
    const self = this;
    resize(file, maxWidth, maxHeight, function (resizedDataUrl) {
      self.setState({ 
        file: file,
        imagePreviewUrl: resizedDataUrl 
      });
      self.props.onChange(resizedDataUrl)
    });
  }

  render() {
    return (
      <div style={styles.container}>
          <input  
            type="file" 
            style={{display:'none'}}
            ref={(input) => { this.filesInput = input }}
            onChange={(e)=>this.handleImageChange(e)} />
          <div onClick={(e) => 
            this.handleImageChange2(e)
          }>Select some files</div>
          <button  
            type="submit" 
            onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
      </div>
    )
  }
}
  
export default ImageUpload
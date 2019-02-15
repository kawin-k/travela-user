import React, { Component } from 'react'
import firebaseApp from '../../../services/firebase'
import { Button } from 'reactstrap'

import './index.scss'

class PhotoVerification extends Component {
  state = {
    file: null,
    imagePreviewUrl: null,
  }

  onUploadFile = (evt) => {
    evt.preventDefault();

    let reader = new FileReader()
    const file = evt.target.files[0]
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: [reader.result]
      })
    }
  }

  uploadToFirebase = () => {
    const { file } = this.state
    if (!file) return

    // create a storage file
    const storageFile = firebaseApp.storage().ref('trips/' + file.name)
    // upload file
    const task = storageFile.put(file)
    // progress bar
    task.on('state_changed',
      function progress(snapshot) {
        console.log('uploading', snapshot)
      },
      function complete() {
        console.log('complete')
      },
      function error(err) {
        console.log('err',err)
      }, 
    )
  }

  onRemovePhoto = () => {
    this.setState({ file: null, imagePreviewUrl: null })
  }

  renderUploadFileButton = () => {
    return(
      <div className='upload-photo-wrapper'>
        <label htmlFor='capture-photo'>
          <img src="/static/assets/images/add-photo.png" />
          Attach picture
        </label>
        <input
          id="capture-photo"
          type="file"
          accept="image/*"
          capture="camera"
          onChange={this.onUploadFile}
          />
      </div>
    )
  }

  renderImageContent = () => {
    const { imagePreviewUrl } = this.state

    return (
      <div className='imgPreview'>
        <div 
          onClick={this.onRemovePhoto} 
          className='delete-photo'
        >
          <img src="/static/assets/images/remove-photo.png" />
        </div>
        <img 
          src={imagePreviewUrl}
        />
      </div>
    )
  }

  render() {
    const { imagePreviewUrl, file } = this.state

    return (
      <div className="photo-verification-container">
        Upload photo ...
        <div className="photo-verification-wrapper">
          { 
            !file
              ? this.renderUploadFileButton()
              : this.renderImageContent()
          }
          {/* <Button onClick={this.uploadFile}>Upload</Button> */}
        </div>
      </div>
    )
  }
}

export default PhotoVerification

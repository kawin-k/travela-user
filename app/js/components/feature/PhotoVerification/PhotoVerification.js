import React, { Component } from 'react'
import firebaseApp from '../../../services/firebase'
import { Button } from 'reactstrap'

import './index.scss'

class PhotoVerification extends Component {
  state = {
    file: null,
  }

  onUploadFile = (evt) => {
    evt.preventDefault();

    let reader = new FileReader()
    let file = evt.target.files[0]
    console.log('file', file, reader)

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)

    // const file = evt.target.files[0]
    // this.setState({ file })
  }

  uploadFile = () => {
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

  render() {
    let { imagePreviewUrl } = this.state

    return (
      <div className="photo-verification-container">
        Upload photo ...
        <div className="photo-verification-wrapper">
          <input
            type="file"
            accept="image/*"
            id="capture"
            capture="camera"
            onChange={this.onUploadFile}
          />
          <div className="imgPreview">
            {
              imagePreviewUrl && (<img src={imagePreviewUrl} />)
            }
          </div>
          {/* <Button onClick={this.uploadFile}>Upload</Button> */}
        </div>
      </div>
    )
  }
}

export default PhotoVerification

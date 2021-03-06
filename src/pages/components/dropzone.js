import React, { Component } from 'react';
import classNames from 'classnames'
import Dropzone from 'react-dropzone'

class DropzoneHL extends Component {
	onDrop = (acceptedFiles, rejectedFiles) => {
		console.log("dropped");
	}

   render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          )
        }}
      </Dropzone>
    );
  }
}

export default DropzoneHL;

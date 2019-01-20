import React, { Component } from 'react';
import DropzoneHL from './components/dropzone';

class Print2dHL extends Component {
	render() {
		return (
			<div>
				<h1>Print Server</h1>
				Use this app to print a document from PDF. <br /><br />

				<DropzoneHL onDrop={this.onDrop} />
			</div>
		);
	}
}

export default Print2dHL;

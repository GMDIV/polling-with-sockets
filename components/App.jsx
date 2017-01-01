import React from 'react';
import io from 'socket.io-client';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			data: {}
		};
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect.bind(this));
	}

	connect(){
		console.log("id", this.socket.id)
		alert("Connected: " + this.socket.id)
	}

	render(){
		return (
			<div>
				<h1>Welcome to the polling centerzzzzssdddddddddZ!</h1>

			</div>
		)
	}

}
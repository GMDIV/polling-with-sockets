import React from 'react';
import io from 'socket.io-client';

import Header from './Header.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			status: 'disconnected',
			data: {}
		};
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect.bind(this));
	}

	connect(){
		console.log("id", this.socket.id)
		//alert("Connected: " + this.socket.id)
		this.setState({status: 'connected'})
		console.log("the this.state.status is now: ", this.state.status)
	}

	render(){
		return (
			<div>
				<Header title="The Header!!" status={this.state.status} />

			</div>
		)
	}

}
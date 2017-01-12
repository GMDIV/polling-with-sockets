import React from 'react';
import io from 'socket.io-client';
import {RouteHandler} from 'react-router';

import Header from './Header.jsx';

//var RouteHandler = Router.RouteHandler; 


export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			status: 'disconnected',
			title: ''
		};
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect.bind(this));
		this.socket.on('disconnect', this.disconnect.bind(this));
		this.socket.on('welcome', this.welcome.bind(this));
	}

	connect(){
		console.log("id", this.socket.id)
		//alert("Connected: " + this.socket.id)
		this.setState({status: 'connected'})
		console.log("the this.state.status is now: ", this.state.status)
	}

	disconnect(){ 
		console.log("id", this.socket.id)
		this.setState({status: 'disconnected'})
		console.log("the this.state.status is now: ", this.state.status)
	}

	welcome(serverState){
		this.setState({title: serverState.title})
	}
	render(){
		return (
			<div>
				<Header title={this.state.title} status={this.state.status} />
				<RouteHandler  />
			</div>
		)
	}

}
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, browserHistory, hasHistory} from 'react-router';

import App from './App.jsx';
import Audience from './Audience.jsx';
import Speaker from './Speaker.jsx';
import Board from './Board.jsx';

// var Route = Router.route;
// var DefaultRoute = Router.DefaultRoute;

var routes = (

	

		<div>
			<Route handler = {App} >
				<DefaultRoute handler={Audience} />
				<Route name="speaker" path="speaker" handler={Speaker}></Route>
				<Route name="board" path="board" handler={Board}></Route>
			</Route>
		</div>
	
)


 //This will run/render the component given for that route
	//it will take whichever route the user enters in.
ReactDOM.render( <Router history={hasHistory} routes={routes}></Router>, document.getElementById('app') );	



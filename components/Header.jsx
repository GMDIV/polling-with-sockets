import React from 'react';

export default function Header (props) {
	console.log("header's recieved props", props)

	
		return (
			<div>
				<header className="row">
					<div className="col-xs-10">
					<h1>
						{props.title}
					</h1>
					</div>
					<div className="col-xs-2">
						<span id="connection-status" className={props.status}>
						</span>
					</div>
				</header>
			</div>
		)
	
}
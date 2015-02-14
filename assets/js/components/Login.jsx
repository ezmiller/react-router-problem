'use strict';
/**
 * Login
 */

// Load React components
var React = require('react');

var Login = React.createClass({

	render: function() {
		return(
			<div>
			<LoginForm />
			</div>
		);
	}
});

module.exports = Login;
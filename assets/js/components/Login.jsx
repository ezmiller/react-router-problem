'use strict';
/**
 * Login
 */

// Load React components
var React = require('react');
var LoginForm = require('./LoginForm.jsx');

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
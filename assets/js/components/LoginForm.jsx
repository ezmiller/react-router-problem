	'use strict';
/**
 * LoginForm
 * @jsx React.DOM
 */

var React = require('react');

var LoginForm = React.createClass({

	render: function() {
		return (
			<div>
        	<input
        	  type="email"
	          name="email"
	          ref="email" />
	        </div>
		);
	}

});

module.exports = LoginForm;
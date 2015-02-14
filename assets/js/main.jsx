'use strict';

var React = require('react');
var App = require('./components/App.jsx');

console.log('about to render App component');

React.render(
	<App />,
	document.getElementById('app')
);

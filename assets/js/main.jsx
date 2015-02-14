'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var App = require('./components/App.jsx');

console.log('about to render App component');

// React.render(
// 	<App />,
// 	document.getElementById('app')
// );

Router.run(routes, function(Handler) {
  React.render(
  	<Handler />,
  	document.getElementById('app')
  );
});

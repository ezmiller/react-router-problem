'use strict';

// Load React.
var React = require('react');

// Load Router.
var Router = require('react-router');
var DefaultRoute = require('react-router').DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Route.Handler;

// Load relevant react components.
var Login = require('./Login.jsx');

var App = React.createClass({

	render: function() {
		return (
			<div>
			<header>
				<ul>
		          <li><Link to="login">Login</Link></li>
	        	</ul>
			</header>
        	<RouteHandler />
			</div>
		);
	}

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" handler={Login} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});

module.exports = App;
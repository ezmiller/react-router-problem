var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./components/App.jsx');
var Login = require('./components/Login.jsx');	

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" handler={Login} />
  </Route>
);

module.exports = routes;
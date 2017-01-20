'use strict';

var ReactHotLoader = require('react-hot-loader');
var React = require('react');
var ReactDOM = require('react-dom');

let App = require('RWB_REACT_MAIN');

ReactDOM.render(
  React.createElement(ReactHotLoader.AppContainer, null, React.createElement(App)),
  document.getElementById(RWB_DOM_NODE_ID)
);

if (module.hot) {
  module.hot.accept('RWB_REACT_MAIN', function() {
    const NextApp = require('RWB_REACT_MAIN');
    ReactDOM.render(
      React.createElement(ReactHotLoader.AppContainer, null, React.createElement(NextApp)),
      document.getElementById(RWB_DOM_NODE_ID)
    );
  });
}

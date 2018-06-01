'use strict';

var showDetails = function showDetails() {
  i++;
  show();
};

var i = 0;
var appRoot = document.getElementById('app');

var show = function show() {
  var templet = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: showDetails },
      i % 2 === 1 ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'p',
      { hidden: i % 2 === 0 },
      'Hey, These are some details you can now see!'
    )
  );

  ReactDOM.render(templet, appRoot);
};

show();

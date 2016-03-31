# react-component-loading [![NPM version](https://img.shields.io/npm/v/react-component-loading.svg?style=flat-square)](https://www.npmjs.com/package/react-component-loading)

React `Loading` animations component base on `CSS3 animation`.

## Install
```
npm install react-component-loading
```

## Usage

The `Loading` component has the following properties:

- color `String`

  Default `black`.

- width `Number`

  Default `60`.

- height `Number`

  Default `60`.

- type `String`

  Default `square-rotate`.

  Now support `square-rotate`, `square-arrange`.
  > Welcome PR to add animations.

## Example
```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var Loading = require('react-component-loading');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Loading type={'square-rotate'} />
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
```

## License

MIT

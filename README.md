# react-component-loading [![NPM version](https://img.shields.io/npm/v/react-component-loading.svg?style=flat-square)](https://www.npmjs.com/package/react-component-loading)

React `Loading` animations component base on `CSS3 animation`.

[中文说明](https://github.com/booxood/react-component-loading/blob/master/README_CN.md)

[DEMO](https://booxood.github.io/react-component-loading)

## Install
```
npm install react-component-loading
```

## Usage

The `Loading` component has the following properties:

- **color** `String`

  Default: `black`.

- **width** `Number`

  Default: `60`.

- **height** `Number`

  Default: `60`.

- **type** `String`

  Default: `square-rotate`.

  Now support: `square-rotate`, `square-arrange`.
  > Welcome PR to add animations.

## Example
```javascript
var React = require('react');
var ReactDOM = require('react-dom');
// ES6/ES7
// import Loading from 'react-component-loading'
var Loading = require('react-component-loading').default;

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

## Suggest
If `require` component use `import Loading from 'react-component-loading'`, it will bundle all loading animation component (include no be used).

**Strongly Suggest** determine loading animation component name when `require`, like following
```
// ES6/ES7
// import SquareRotateLoading from 'react-component-loading/lib/SquareRotate'
var SquareRotateLoading = require('react-component-loading/lib/SquareRotate').default
```

## License

MIT

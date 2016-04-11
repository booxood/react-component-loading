# react-component-loading [![NPM version](https://img.shields.io/npm/v/react-component-loading.svg?style=flat-square)](https://www.npmjs.com/package/react-component-loading)

React `加载` 动画组件，基于 `CSS3 animation`。

[English Readme](https://github.com/booxood/react-component-loading/blob/master/README.md)

[演示](https://booxood.github.io/react-component-loading)

## 安装
```
npm install react-component-loading
```

## 使用

`加载` 动画组件支持以下属性：

- **type** `String`

  默认: `square-rotate`.

  现在支持： `square-rotate`, `square-arrange`.
  > 欢迎提交 PR 添加其他加载动画。

- **color** `String`

  默认: `black`.

- **width** `Number`

  默认: `60`.

- **height** `Number`

  默认: `60`.

- **delay** `String`

  默认: `0s`.


## 示例
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

## 建议
如果使用 `import Loading from 'react-component-loading'` 引入组件，最终打包时会把所有的动画组件（包含你没有用到的）都打包进来。

**强烈建议** 引入组件时指定要使用的组件，采用下面的方式引入
```
// ES6/ES7
// import SquareRotateLoading from 'react-component-loading/lib/SquareRotate'
var SquareRotateLoading = require('react-component-loading/lib/SquareRotate').default
```

## 许可

MIT

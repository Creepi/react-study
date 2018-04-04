### React 学习笔记

- #### JSX

  从本质上讲，JSX 只是为 `React.createElement(component, props, ...children)` 函数提供的语法糖。JSX代码:

  ```jsx
  <div className="sidebar" />
  ```

  编译为:

  ```js
  React.createElement(
    'div',
    {className: 'sidebar'},
    null
  )
  ```

  ​


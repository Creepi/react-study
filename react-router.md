### React-router v4

- 安装

  ```
  npm install --save react-router-dom
  ```

  > React Router被拆分成三个包：`react-router`,`react-router-dom`和`react-router-native`。`react-router`提供核心的路由组件与函数。其余两个则提供运行环境（即浏览器与react-native）所需的特定组件。

- Router

  ```react
  ReactDOM.render(
      <BrowserRouter>
          <Route path="/" component={Layout}>

          </Route>
      </BrowserRouter>,
       document.getElementById('root')
  );
  ```

  > 对于网页项目，存在`<BrowserRouter>`与`<HashRouter>`两种组件。当存在服务区来管理动态请求时，需要使用<BrowserRouter>组件，而<HashRouter>被用于静态网站。

- History

  每个路由器都会创建一个history对象并用其保持追踪当前`location`并且在有变化时对网站进行重新渲染。这个history对象保证了React Router提供的其他组件的可用性，所以其他组件必须在router内部渲染。一个React Router组件如果向父级上追溯却找不到router组件，那么这个组件将无法正常工作。

- Link

  我们应用需要在各个页面间切换。如果使用锚点元素（就是）实现，在每次点击时页面将被重新加载。React Router提供了<Link>组件用来避免这种状况的发生。当你点击<Link>时，URL会更新，组件会被重新渲染，但是页面不会重新加载。

  ```react
  import { Link } from 'react-router-dom'
  const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </header>
  )
  ```

  ​
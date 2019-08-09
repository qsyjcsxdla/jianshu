import React, { Component } from 'react';
// npm install --save redux;
//npm install --save react-redux
////npm install --save-dev redux-devtools
import { Provider } from 'react-redux' 
//npm install react-router-dom --save-dev
import { BrowserRouter, Route } from 'react-router-dom'
import {GlobalStyle} from'./style.js'
import {GlobalIconStyle} from './statics/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
//import Detail from './pages/detail'
//使用异步组件
import Detail from './pages/detail/loadable' 
import Login from './pages/login'
import Write from './pages/write'
import store from './store'


class App extends Component {
  render() {
    return (
      <div > 
        <GlobalStyle></GlobalStyle>
        <GlobalIconStyle></GlobalIconStyle>
        <Provider store = { store }> 
            {/* BrowserRouter代表路由 */}
            <BrowserRouter>
              <div>
              <Header></Header>
                {/* exact 表示路劲完全匹配 */}
                {/* Route代表路由规则 */}
                {/* <Route path = '/' exact render = { () => (<div>home</div>)}></Route>
                <Route path = '/detail' exact render = { () => (<div>detail</div>)}></Route> */}
                <Route path = '/' exact component = {Home}></Route>
                <Route path = '/login' exact component = {Login}></Route>
                <Route path = '/write' exact component = {Write}></Route>
                <Route path = '/detail/:id' exact component = {Detail}></Route>
                {/* <Route path = '/detail' exact component = {Detail}></Route> */}
              </div>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

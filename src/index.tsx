import React from 'react';
import ReactDOM from 'react-dom';
import {
    registerMicroApps,
    start,
    addGlobalUncaughtErrorHandler,
} from 'qiankun'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
            <div id="sub-child"></div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// 注册微应用;
registerMicroApps(
    [
        {
            // 子应用的容器
            name: 'bos-child', // app name registered
            // 子应用的入口js
            entry: '//localhost:5002',
            // 主应用显示子应用的容器
            container: '#sub-child',
            // 路由激活状态
            activeRule: '/document',
        },
    ],
    {
        beforeLoad: () => {
            return Promise.resolve()
        },
        afterMount: () => {
            return Promise.resolve()
        },
    }
)

addGlobalUncaughtErrorHandler((event:any) => {
    console.error(event, 'event2');
    const { message: msg }:any = event;
    if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
        console.error('微应用加载失败，请检查应用是否可运行');
    }
});

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

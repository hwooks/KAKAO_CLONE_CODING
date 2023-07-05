import { useState, useEffect } from 'react';
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import MainLayout from './routes/MainLayout';

// routes
import Main from './routes/Main'
import Login from './routes/Login'
import SignUp from './routes/SignUpForm'
import Detail from './routes/Detail'
import Cart from './routes/Cart'
import Order from './routes/Order'
import Result from './routes/Result'
import NotFound from './routes/NotFound'

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {

  return (
    <div className="layout">
        <BrowserRouter>
            <Routes>
                {/* 단독 레이아웃 */}
                <Route path={staticServerUri + "/login"} element={<Login />}></Route>
                <Route path={staticServerUri + "/signup"} element={<SignUp />}></Route>
                {/* Header, Footer 레이아웃 */}
                <Route element={<MainLayout />}>
                    <Route path={staticServerUri + "/"} element={<Main />}></Route>
                    <Route path={staticServerUri + "/product/:productId"} element={<Detail />}></Route>
                    <Route path={staticServerUri + "/cart"} element={<Cart />}></Route>
                    <Route path={staticServerUri + "/order"} element={<Order />}></Route>
                    <Route path={staticServerUri + "/result/:orderId"} element={<Result />}></Route>
                    {/* 위 라우트 경로 중 일치하는 라우트가 없다면 아래 라우트 출력 */}
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

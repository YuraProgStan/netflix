import React, {useContext} from 'react';
import './app.scss'
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import Watch from "./pages/watch/Watch";
import {AuthContext} from "./context/authContext";

const App = () => {
    // const user =true;
    const { user } = useContext(AuthContext);
    return (
        <Routes>
            <Route path = {'/'} element = {user ? <Home /> : <Register /> } />
            <Route path = {'/register'} element = {!user ?  <Register /> : <Home /> } />
            <Route path = {'/login'} element = {!user ?  <Login /> : <Home /> } />

            {user &&(
                <>
            <Route path = {'/movies'} element = {<Home type={'movies'} />} />
            <Route path = {'/series'} element = {<Home type={'series'} />} />
            <Route path = {'/watch'} element = {<Watch />} />
                </>
                )
            }


        </Routes>
    );
};

export default App;
import React, {useEffect} from 'react';
import withProvider from "./hoc/withProvider";
import {compose} from "redux";
import {connect} from "react-redux";
import {loadInitData} from "./redux/reducers/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import LoginLayout from "./components/LoginLayout/LoginLayout";
import RegisterLayout from "./components/RegisterLayout/RegisterLayout";
import ResetPasswordLayout from "./components/ResetPasswordLayout/ResetPasswordLayout";
import NewPasswordLayout from "./components/NewPasswordLayout/NewPasswordLayout";

const App = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact={true} path={'/'} component={HomeLayout}/>
            <Route exact={true} path={'/login'} component={LoginLayout}/>
            <Route exact={true} path={'/register'} component={RegisterLayout}/>
            <Route exact={true} path={'/reset'} component={ResetPasswordLayout}/>
            <Route path={'/change-password'} component={NewPasswordLayout}/>
        </BrowserRouter>
};

export default compose(withProvider)(App);

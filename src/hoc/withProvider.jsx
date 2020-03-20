import React from 'react';
import {Provider} from 'react-redux';
import store from "../redux/store";

const withProvider = (Component) => {
    return (props) => <Provider store={store}>
        <Component {...props}/>
    </Provider>
};
export default withProvider;
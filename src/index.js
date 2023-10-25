import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import { ThemeProvider } from "@mui/material/styles";
import App from "./App"

const store = configureStore({reducer:reducers, middleware:[thunk]});


ReactDOM.render(  
    <Provider store={store}> 
        <App />   
    </Provider>,
    document.getElementById('root')
);
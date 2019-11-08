import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {villageHandler} from './reducers'
import thunk from 'redux-thunk'


ReactDOM.render(<Provider store={createStore(villageHandler, applyMiddleware(thunk))}><App/></Provider>, document.getElementById("root"));

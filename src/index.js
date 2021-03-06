import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { App } from './components/App'
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

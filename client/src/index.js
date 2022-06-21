import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"
import {ChakraProvider} from "@chakra-ui/react"
import axios from "axios"
import {store} from "./Redux/store"

import reportWebVitals from './reportWebVitals';


axios.defaults.baseURL = "https://beautyappbebo.herokuapp.com/"
axios.defaults.headers.post["Content-Type"]="application/json"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
  <Provider store={store}>
 
  <App />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import store from "./Redux/store"
import {ChakraProvider} from "@chakra-ui/react"
import {BrowerRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowerRouter>
     <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
     </Provider>
    </BrowerRouter>
  </React.StrictMode>
)

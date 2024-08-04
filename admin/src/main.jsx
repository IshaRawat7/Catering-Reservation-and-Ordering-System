import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { StoreContextProvider } from './context/StoreContext.jsx'
if(process.env.NODE_ENV === 'production')  disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <StoreContextProvider>
  <App />
  </StoreContextProvider>
  </BrowserRouter>
)

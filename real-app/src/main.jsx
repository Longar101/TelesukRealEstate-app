/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './redux/store.js';
import {Provider} from "react-redux"
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
 

     <Provider store={store}>
        <App />
     </Provider>
  
 
)

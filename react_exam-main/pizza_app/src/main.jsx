import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Header} from "./components/header/Header.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/index.jsx";
import {Provider} from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </div>
)

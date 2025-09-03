// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from './StateProvider.jsx'
import reducer, { initialState } from './reducer.jsx'



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>  </React.StrictMode>,
  document.getElementById("root")
);






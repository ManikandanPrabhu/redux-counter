import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import Reducer from "./Reducer";

const store = createStore(Reducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);

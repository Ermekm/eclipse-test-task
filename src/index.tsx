import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/eclipse-test-task">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

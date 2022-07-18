import React from "react";
import ReactDOM from "react-dom/client";
import { MyRoutes } from "./router/index";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./lib/store";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <MyRoutes />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

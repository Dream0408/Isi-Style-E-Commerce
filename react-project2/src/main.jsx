import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./slices/productsSlice";
import { productsApi } from "./slices/productsApi";
import cartReducer, { getTotals } from "./slices/cartSlice";
import authReducer, { loadUser } from "./slices/authSlice";
import ordersSlice from "./slices/ordersSlice";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});

const store = configureStore({
  reducer: {
    products: productsReducer,
    order: ordersSlice,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ProductsProvider,
  FiltersProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
  UserProvider,
} from "./frontend/contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FiltersProvider>
            <WishlistProvider>
              <CartProvider>
                <UserProvider>
                  <App />
                </UserProvider>
              </CartProvider>
            </WishlistProvider>
          </FiltersProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

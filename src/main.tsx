import React from 'react';
import { mainTheme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { UserProvider } from './providers/UserContext';
import { ModalProvider } from './providers/ModalContext';
import { CartProvider } from './providers/CartContext';
import { ProductsProvider } from './providers/ProductsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ModalProvider>
          <UserProvider>
            <CartProvider>
              <ProductsProvider>
                <App />
              </ProductsProvider>
            </CartProvider>
          </UserProvider>
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

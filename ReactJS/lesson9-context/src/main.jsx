import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import AppRouter from './AppRouter';
import { ProductProvider } from './context/ProductContext';
import { LangProvider } from './context/LangContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LangProvider>
    <ProductProvider>
      <AppRouter />
    </ProductProvider>
  </LangProvider>
  </StrictMode>
);

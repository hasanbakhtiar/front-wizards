import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import AppRouter from './AppRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);

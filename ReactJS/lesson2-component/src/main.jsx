import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/style.css';
import Products from './components/Products';
import Header from './layout/Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <div className="container">
    <Products/>
    </div>
  </StrictMode>,
)

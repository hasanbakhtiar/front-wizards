import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from 'react-use-cart';

const Header = () => {
  const [lang, setLang] = useContext(LangContext);
  const { totalUniqueItems } = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div>
            <Button
              variant="warning"
              onClick={() => {
                lang === 'az' ? setLang('en') : setLang('az');
              }}
            >
              {lang === 'az' ? 'AZ' : 'EN'}
            </Button>
            <Link to="/cart" className="ms-3 btn btn-primary position-relative">
              <FaCartShopping size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalUniqueItems}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

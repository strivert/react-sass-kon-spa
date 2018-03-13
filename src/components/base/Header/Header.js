import React from 'react';
import Responsive from 'components/common/Responsive';
import { Link } from 'react-router-dom';
import logoImg from 'static/images/logo.png';
import './Header.scss';

const Header = ({ right, userMenu }) => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <div className="brand">
        <Link to="/">
          <img src={logoImg} alt="logo" />
          <span>konch</span>
        </Link>
      </div>      
      <div className="right">
        <nav>
          <Link to="/">Create an account</Link>
          <Link to="/">Login</Link>
        </nav>
      </div>
    </Responsive>
  </header>
);

export default Header;

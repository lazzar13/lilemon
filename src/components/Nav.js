import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../src/icons_assets/Logo.svg';

function Nav() {
  const location = useLocation();

  return (
    <nav className="NavBar">
      <img src={logo} alt="Logo" />
      <ul id="NavBar">
        <NavItem to="/" currentLocation={location}>Home</NavItem>
        <NavItem to="/about" currentLocation={location}>About</NavItem>
        <NavItem to="/menu" currentLocation={location}>Menu</NavItem>
        <NavItem to="/reservations" currentLocation={location}>Reservations</NavItem>
        <NavItem to="/order" currentLocation={location}>Order Online</NavItem>
        <NavItem to="/login" currentLocation={location}>Login</NavItem>
      </ul>
    </nav>
  );
}

function NavItem({ to, currentLocation, children }) {
  const isActive = to === currentLocation.pathname;

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Nav;

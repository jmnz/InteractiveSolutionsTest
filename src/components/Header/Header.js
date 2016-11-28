import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { IndexLink, Link } from 'react-router'
import './Header.scss'


export const Header = () => (

  <div>

  <Navbar inverse collapseOnSelect fixedTop='true'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>Interactive Solutions Test</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href='/'>
          <IndexLink to='/' activeClassName='route--active'>
        Home
          </IndexLink>
        </NavItem>
        <NavItem href='/counter'>
          <Link to='/counter' activeClassName='route--active'>
        Counter
          </Link>
        </NavItem>
        <NavItem href='/searchBar'>
          <Link to='/searchBar' activeClassName='route--active'>
        searchBar
          </Link>
        </NavItem>
        <NavItem href='/info'>
          <Link to='/info' activeClassName='route--active'>
        Info
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <br />
    <br />
    <br />
    <br />

  </div>
)

export default Header

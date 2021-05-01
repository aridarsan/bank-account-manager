import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import avatardef from '../image/logo512.png';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavBar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      className='fixed-top'
      expand='md'
      style={{ backgroundColor: '#f2f2f2', height: '70px' }}
    >
      <Container>
        <NavLink to='/'>
          <NavbarBrand>
            <h5 className='mt-2 ml-2' style={{alignItems:"center"}}>
              <strong>Bank Manager</strong>
            </h5>
          </NavbarBrand>
        </NavLink>

        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavLink to='/' activeClassName='activeNav' className='nav-link'>
              <h5 className='mt-2 navbar-text'>Home</h5>
            </NavLink>
          </Nav>

          <Nav>
            <NavLink
              to='/about-app'
              activeClassName='activeNav'
              className='nav-link'
            >
              <h5 className='mt-2 navbar-text'>About</h5>
            </NavLink>
          </Nav>

          <Nav>
            <NavLink
              to='/browse-field'
              activeClassName='activeNav'
              className='nav-link'
            >
              <h5 className='mt-2 navbar-text'>History</h5>
            </NavLink>
          </Nav>

          <Nav className='mt-2 mb-2 ml-auto '>
            <>
              <Nav>
                <ButtonDropdown
                  className='profile-toggle'
                  isOpen={dropdownOpen}
                  toggle={toggle}
                >
                  <Nav className='mt-3 mb-2 ml-3' style={{ padding: '0 15px' }}>
                    <h5> Welcome, Ari</h5>
                  </Nav>
                  <DropdownToggle
                    color='#313131'
                    style={{
                      float: 'right',
                      width: '40px',
                    }}
                    caret
                    size='xs'
                    className='mr-2'
                  >
                    <img
                      src={avatardef}
                      alt='pp'
                      className='avatar'
                      style={{ border: '2px solid #53c9c2', width: '50px' }}
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className='profil-drop'>
                      <NavLink
                        to='/profile'
                        activeClassName='active'
                        className='nav-link m-auto'
                        color='white'
                      >
                        <h5>
                          <i class='fas fa-user-alt mr-2'></i>Profile
                        </h5>
                      </NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink
                        to='/'
                        activeClassName='active'
                        className='nav-link'
                        color='white'
                      >
                        <h5>
                          <i class='fas fa-sign-out-alt mr-2'></i>Logout
                        </h5>
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Nav>
            </>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

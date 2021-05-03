import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import avatardef from '../image/logo512.png';
import PropTypes from "prop-types";
import {
  Container,
  Navbar,
  Nav,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand
} from 'reactstrap';

const NavBar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Navbar
      className='fixed-top'
      expand='md'
      style={{ backgroundColor: 'lightblue', height: '70px', boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)' }}
    >
      <Container>
        <Nav style={{ alignItems: 'center' }}>
          <div>
            <NavLink to='/'>
              <NavbarBrand>
                <h5 style={{ alignItems: 'center' }}>
                  <strong>Bank Account Manager</strong>
                </h5>
              </NavbarBrand>
            </NavLink>
          </div>
        </Nav>

        <Nav>
          <div>
            <ButtonDropdown
              className='profile-toggle ml-auto'
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle
                color='#313131'
                style={{
                  float: 'right',
                  width: '40px',
                }}
                size='xs'
                className='ml-auto'
              >
                <img
                  src={avatardef}
                  alt='pp'
                  className='avatar'
                  style={{
                    border: '2px solid #222',
                    width: '30px',
                    borderRadius: '30px',
                  }}
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    to='/'
                    activeClassName='active'
                    className='nav-link'
                    style={{height:"2rem"}}
                  >
                    <p>
                      <i className='fas fa-user-alt mr-2'></i>Profile
                    </p>
                  </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink
                    to='/'
                    activeClassName='active'
                    className='nav-link'
                    style={{height:"2rem"}}
                  >
                    <p>
                      <i className='fas fa-sign-out-alt mr-2'></i>Logout
                    </p>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
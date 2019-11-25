import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,


} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" expand="lg" dark fixed="top" id="sideNav" className="bg-primary">
      <NavbarBrand href="#page-top" className="js-scroll-trigger">
        <span className="d-block d-lg-none">Anthony Sherwin</span>
        <span className="d-none d-lg-block">
          {/*Image*/}
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#experience">Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#education">Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#interests">Interests</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#awards">Awards</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navigation

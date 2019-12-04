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
import { ScrollspyNavLink } from 'reactstrap-scrollspy'

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
            <ScrollspyNavLink name="about">
              <NavLink className="js-scroll-trigger" href="#about">About</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="experience">
              <NavLink className="js-scroll-trigger" href="#experience">Experience</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="education">
              <NavLink className="js-scroll-trigger" href="#education">Education</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="skills">
              <NavLink className="js-scroll-trigger" href="#skills">Skills</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="interests">
              <NavLink className="js-scroll-trigger" href="#interests">Interests</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navigation

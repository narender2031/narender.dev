import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Brand href="#">Brand link</Navbar.Brand>
    <Nav
      defaultActiveKey="/home"
      variant="pills"
      className="ml-auto"
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/work">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory } from 'react-router';
const Header = () => {
  const {user,logOut,admin} = useAuth();
  const history = useHistory();
  const handleLogOut = () =>{
    logOut();
    alert('log out successfully');
    history.push('/login');
  }
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#"><img src = 'http://demo.themeforshop.com/html_jewelry/assets/images/logo.png'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to = '/'>Home</Nav.Link>
          <Nav.Link as={Link} to = '/explore'>Explore</Nav.Link>
          {user?.email ? <Nav.Link as={Link} to = '/dashboard'>Dashboard</Nav.Link> : ""}
        
         {user?.email ? <p className = 'mt-2 mx-3'>Hey, {user.displayName}</p>:""}
          {user?.email ? <><button className = "btn btn-sm bg-danger text-white" onClick={handleLogOut}>LogOut</button></> :   <><Nav.Link as={Link} to = '/registration'>Registration</Nav.Link> <Nav.Link as={Link} to = '/login'>Login</Nav.Link></>}
          
         
        </Nav>
    
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header

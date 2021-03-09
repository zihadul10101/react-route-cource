import React from 'react';
import {Navbar,Nav,Form,FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="mt-2 m-3 mb-2">
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Programming Hero</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    );
};

export default Header;
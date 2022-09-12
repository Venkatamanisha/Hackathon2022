import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

const Navbarheader = () => {
  
    return (
        <div>

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav">
      
        <li> <Navbar.Brand href="#home">
            <img
              src="https://www.targetadmission.com/img/logos/2541139805.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand></li>  
      
        
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/Event">
                  Events
                </NavLink>
              </li>
              <li className="nav-item  justify-content-end" >
                <NavLink className="nav-link" to="/Admin" id="admin">
                  Admin
                </NavLink>
              </li>
            </ul>
           
            
             
          </div>
        </div>

      </nav> */}
      <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img
              src="https://www.targetadmission.com/img/logos/2541139805.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <li><NavLink to="/" className="text">Home</NavLink></li>
            <li><NavLink to="/Events" className="text1">Events</NavLink></li>
         
            
          </Nav>
          
        
           <NavLink to="/Admin" className="adminbtn"><Button variant="outline-light">Admin</Button></NavLink> 
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
          
             
        </div>
    );
};

export default Navbarheader;
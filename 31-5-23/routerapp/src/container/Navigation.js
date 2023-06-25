import React from 'react'
import { Link } from 'react-router-dom'
import {Nav,NavBar,NavLink} from 'react-bootstrap'

export default function Navigation() {
  return (
    <NavBar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <NavBar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
        <NavBar.Collapse id="navbarScroll">
            <Nav>
                <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                <NavLink eventKey="2" as={Link} to="/about">About</NavLink>
                <NavLink eventKey="3" as={Link} to="/contat">Contact</NavLink>
            </Nav>
        </NavBar.Collapse>
    </NavBar>
  )
}

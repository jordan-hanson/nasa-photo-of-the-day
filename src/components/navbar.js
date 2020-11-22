import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    
    background: blue;
    color: white;`;

function NavBar() {
    return (
        <StyledNavbar>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    )
}
export default NavBar
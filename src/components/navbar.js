import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    
    background: white;
    color: white;
    width: 50%;
    float: left;
    font-weight: bold;`;

// const StyledLink = styled.link`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     align-items: right;
// `;

function NavBar() {
    return (
        <StyledNavbar>
            <div className="nav">
                <div className="container">
                    <ul className="list">
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="link">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    )
}
export default NavBar
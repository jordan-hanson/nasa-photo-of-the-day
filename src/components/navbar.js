import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    
    background: white;
    color: white;
    width: 50%;
    /* float: left; */
    font-weight: bold;`;

// const StyleContainer = styled.div`
//     width: 100%;
// `;

function NavBar() {
    return (
        <StyledNavbar className="nav">
            <div className="container">
                <StyledNavbar className="list">
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </StyledNavbar>
            </div>
        </StyledNavbar>
    )
}
export default NavBar
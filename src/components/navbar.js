import React, { Link } from 'react'
import styled from 'styled.compoents'

const mainPageNavbar = styled.nav
    `display: flex;
    flex-flow: row-nowrap;
    justify-content: space-evenly;
    align-items: center`


const NavBar = () => {

    return (
        <mainPageNavbar>
            <div className="nav -Links">
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
        </mainPageNavbar>
    )
}
export default NavBar
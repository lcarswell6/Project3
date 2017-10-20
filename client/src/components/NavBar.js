import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyles = styled.div`
background: black;
color: white;

`

const NavBar = () => {
    return (
        <NavStyles>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/login'>LogIn</Link>
            <br/>
            <Link to='/shoes'>Shoes</Link>
        </NavStyles>
    )
}



export default NavBar
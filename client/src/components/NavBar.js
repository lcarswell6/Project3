import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/login'>LogIn</Link>
            <br/>
            <Link to='/shoes'>Shoes</Link>
        </div>
    )
}



export default NavBar
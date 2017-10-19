import React, { Component } from 'react';
import styled from 'styled-components'

const HomeStyles = styled.div`
background-color: black;
color: white;
height: 800px;
max-width: 900px;
min-width: 400px;
border: 10px solid red;
margin: 10px;
padding:10px;
`

class HomePage extends Component {
    render() {
        return (
            <HomeStyles>
                <h1>
                    <strong>Home Page</strong>
                </h1>
            </HomeStyles>
        );
    }
}

export default HomePage;
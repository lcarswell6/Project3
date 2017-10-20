import React, { Component } from 'react';
import styled from 'styled-components'

const HomeStyles = styled.div`
background-color: black;
text-align: center;
color: white;
height: 100%;
max-width: 100%;
min-width: 400px;

`

class HomePage extends Component {
    render() {
        return (
            <HomeStyles>
                <h1>
                    <strong>Is You Shoppin or Nah?</strong>
                </h1>
                <img src="https://i.imgur.com/w4RNX50.jpg" />

            </HomeStyles>
        );
    }
}

export default HomePage;
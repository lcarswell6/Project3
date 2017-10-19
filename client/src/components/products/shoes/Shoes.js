import React, { Component } from 'react';
import styled from 'styled-components'


const StyledShoes = styled.div`
background-color:black;
color: white;

`
class Shoes extends Component {
    render() {
        return (
            <StyledShoes>
                <h1>
                    page to show shoes as products
                    
                </h1>
            </StyledShoes>
        );
    }
}

export default Shoes;
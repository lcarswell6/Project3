import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const LoginPageStyles = styled.div`
color: #442887;
height: 1000px;
`
class LogInPage extends Component {
    state = {
        users: []
    }



    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                this.setState({ users: res.data })
            })
    }
    componentWillMount() {
        this.getAllUsers()
    }

    render() {
        return (
            <LoginPageStyles>

                <h1> Choose a User</h1>
                    <br/>
                {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/login/${user._id}`}> {user.name} </Link>)
                    })}


                <SignUpForm />

            </LoginPageStyles>
        )
    }
}


export default LogInPage
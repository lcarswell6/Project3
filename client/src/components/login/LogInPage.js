import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'


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
            <div>
                <h1> Choose a User
                    <br/>
                {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/login/${user._id}`} >{user.name}</Link>)
                    })}
                </h1>
                <SignUpForm />
            </div>
        )
    }
}


export default LogInPage
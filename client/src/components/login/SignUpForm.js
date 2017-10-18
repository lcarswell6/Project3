import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignUpForm extends Component {
    state = {
        newUser: {
            name: '',
            password: ''
        },
        redirectToLogin: false,
        newUserId: '',
    }

    //handleChange is called to be able to input data in form
    handleChange = (event) => {
        const attribute = event.target.name

        const updateUser = { ...this.state.newUser }
        updateUser[attribute] = event.target.value

        this.setState({ newUser: updateUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        this.setState({ redirectToLogin: true, newUserId: res.data._id })
    }


    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to={`/login/${this.state.newUserId}`} />
        }

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onChange={this.handleChange} name="name" 
                        type="text" value={this.state.newUser.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange}
                            name="password" type="text"
                            value={this.state.newUser.password} />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }

}

export default SignUpForm
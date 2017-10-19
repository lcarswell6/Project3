import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const ProfileStyles = styled.div`
height: 500px;
weight: 300px;
border: 10px solid red;
color: white;
background-color: grey;
position: relative;
input[type=text]:focus {
    background-color: lightblue;
}

`

class UserInfo extends Component {
    state = {
        user: {
            name: "",
            password: ""
        },
        redirectToLogin: false,

    }

    componentWillMount() {
        this.getUser()
    }

    getUser = async () => {
        try {
            const {
                userId
            } = this.props.match.params
            const res = await axios.get(`/api/users/${userId}`)
            console.log(res)
            this.setState({
                user: res.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleDelete = async () => {
        const userId = this.props.match.params
        const response = await axios.delete(`/api/users/${userId}`)
        console.log('redirecting')
        this.setState({ redirectToLogin: true })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const clonedUser = {...this.state.user}
        console.log(clonedUser)
        clonedUser[attribute] = event.target.value
        this.setState({user: clonedUser})
      }

      updateUser = async () => {
        const { userId } = this.props.match.params
    
        const clonedUser = {...this.state.user}
        console.log(clonedUser)
        const res = await axios.patch(`/api/users/${userId}`, {
          user: clonedUser
        })
        console.log(res.data)
        this.setState({user: res.data})
      }

    render() {
        const updateUser = () => {
            this.updateUser(this.state.user._id)
        }
        const handleDelete = () => {
            this.handleDelete(this.state.user._id)
        }
        if(this.state.redirectToLogin) {
            return <Redirect to={`/login`}/>
        }
        return (
            <ProfileStyles>

                <h1>User Info</h1>
                <h1>{this.state.user.name}</h1>
                <h3>Update User Info</h3>
                <input onBlur={updateUser} onChange={this.handleChange} name="name" value={this.state.user.name} />
                <input onBlur={updateUser} onChange={this.handleChange} name="password" value={this.state.user.password}/>
                <br/>
                <button onClick={handleDelete}>Delete User</button>

            </ProfileStyles>
        )
    }   
}

export default UserInfo
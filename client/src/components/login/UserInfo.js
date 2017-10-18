import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'



class UserInfo extends Component {

    state = {
        user: {
            name: "",
            password: ""
        }

    }

    componentWillMount() {
        this.getUser()
    }

    getUser = async () => {
        try{
            const {
                userId
            } = this.props.match.params
            const res = await axios.get(`/api/users/${userId}`)
            this.setState({
                user: res.data
            })
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>


            </div>
        )
    }
}

export default UserInfo
import React from 'react'
import './userProfile.css'

import { connect } from 'react-redux'

function UserProfile(props){

    const { name, bio } = props

    return (
        <div className="userProfile">
            <h5>Nome: {name}</h5>
            <h5>Bio: {bio}</h5>
        </div>
    )
}

function matStateToProps(state){
    return {
        name: state.user.name,
        bio: state.user.bio
    }
}

export default connect(matStateToProps)(UserProfile)
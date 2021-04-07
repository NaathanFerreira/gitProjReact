import React from 'react'
import Form from './components/Form'
import UserProfile from './components/UserProfile'

import './content.css'

export default props => {
    return (
        <div className="content">
            <Form />
            <UserProfile />
        </div>
    )
}
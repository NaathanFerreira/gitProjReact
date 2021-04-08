import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import './form.css'

import { connect } from 'react-redux'

import { findUser } from '../../store/actions/userActions'

function Form(props) {

    const [userName, setUserName] = useState("")

    function onUserNameChange(e) {
        setUserName(e.target.value)
    }

    function keyHandler(e) {
        if (e.key === "Enter") {
            props.findUserProp(userName)
        }
    }

    return (
        <div className="form">
            <p>Search users on GitHub</p>
            <div className="row">
                <div className="col-11">
                    <input type="text" className="form-control" id="userName" placeholder="Type a name to find users" 
                    value={userName} onChange={onUserNameChange} onKeyUp={keyHandler}/>
                </div>
                <div className="col-1">
                    <button className="btn btn-primary"
                        onClick={() => props.findUserProp(userName)}>
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        findUserProp(userName) {
            const action = findUser(userName)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Form)


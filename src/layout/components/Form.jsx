import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

import './form.css'

import { connect } from 'react-redux'

import { findUser, clearUser, setLoading } from '../../store/actions/userActions'

function Form(props) {

    const [userName, setUserName] = useState("")

    function onUserNameChange(e) {
        setUserName(e.target.value)
    }

    function keyHandler(e) {
        if (e.key === "Enter") {
            props.setLoadingProp()
            props.findUserProp(userName)
        }
    }

    return (
        <div className="form">
            <p>Search users on GitHub</p>
            <div className="row">
                <div className="col-12">
                    <input type="text" className="form-control" id="userName" placeholder="Type a name to find users"
                        value={userName} onChange={onUserNameChange} onKeyUp={keyHandler} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <button className="btn btn-primary mr-3"
                        onClick={() => {
                            props.setLoadingProp()
                            props.findUserProp(userName)
                        }}>
                        <FaSearch /> <strong>SEARCH</strong>
                    </button>
                </div>
                <div className="col-6">
                    <button className="btn btn-danger"
                        onClick={() => {
                            setUserName("")
                            props.clearUserProp()
                        }}>
                        <FaTimes /> <strong>CLEAR</strong>
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
        },
        clearUserProp(){
            const action = clearUser()
            dispatch(action)
        },
        setLoadingProp(){
            const action = setLoading()
            dispatch(action)
        },
    }
}

export default connect(null, mapDispatchToProps)(Form)


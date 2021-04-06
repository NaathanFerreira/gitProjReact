import React from 'react'
import './header.css'

import { AiFillGithub } from 'react-icons/ai'

export default props => {
    return (
        <header className="header">
            <AiFillGithub />
            <p className="ml-3">GitHub User Finder</p>
        </header>
    )
}
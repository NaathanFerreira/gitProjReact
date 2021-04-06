import React from 'react'

import './form.css'

export default props => {

    function keyHandler(e) {
        if(e.key === "Enter"){
            console.log("Pesquisou !")
        }
    }

    return (
        <div className="form">
            <form>
                <div className="col-12">
                    <p>Search users on GitHub</p>
                    <input type="text" className="form-control" id="userName" placeholder="Type a name to find users" />
                </div>
            </form>
        </div>
    )
}
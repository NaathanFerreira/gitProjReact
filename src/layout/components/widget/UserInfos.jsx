import React from 'react'

export default props => {
    return (
        <div className="row">
            <div className="col-1">
                {props.children}
            </div>
            <div className="col-11">
                {props.title ? <h5>{props.text}</h5> : 
                props.link ? <a href={props.link} target="_blank"> <p>{props.text}</p> </a> : <p>{props.text}</p>}
            </div>
        </div>
    )
}
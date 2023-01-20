import React from "react"

export default function Card(props) {
    return (
        <div onClick={props.handleClick} className="card">
            <div className="char-img-cont">
                <img src={props.source} alt="" className="char-img"/>
                </div>
            
            <div className="card-text">{props.name}</div>
        </div>
    )
}
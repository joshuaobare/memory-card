import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.source} alt="" />
            <div className="card-text">{props.name}</div>
        </div>
    )
}
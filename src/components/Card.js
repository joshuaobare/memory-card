import React from "react"

export default function Card(props) {
    return (
        <div>
            <img src={props.source} alt="" />
            <div>{props.name}</div>
        </div>
    )
}
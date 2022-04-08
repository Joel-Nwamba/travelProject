import React from "react"

export default function Cards(props) {
    return(
        <div className="main-card">
            <img className="image--header" src={props.img} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </div>
    )
}
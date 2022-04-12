import React from "react"

export default function Cards(props) {
    return(
        <div className="main-card">
            <img className="image--header" src={props.img} alt=""/>
            <div className="header">
            <h3 className="title--header">{props.title}</h3>
            </div>
            <div className="card-location-map">
            <p><i class="fa-solid fa-location-dot"></i>{props.location}</p>
            <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
            </div>
            <div className="date-description">
            <p className="dates">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
            </div>
            </div>
    )
}
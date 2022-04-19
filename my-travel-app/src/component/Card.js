import React from "react"

export default function Cards(props) {
    return(
        <div className="main-card">
            <img className="image--header" src={props.img} alt=""/>
            <h3 className="title--header">{props.title}</h3>
            <div className="card-location-map">
            <p className="location"><i class="fa-solid fa-location-dot"></i>{props.location}</p>
            <p className="maps--location"><a href={props.googleMapsUrl}>View on Google Maps</a></p>
            </div>
            <div className="date-description">
            <p className="dates">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
            </div>
            </div>
    )
}
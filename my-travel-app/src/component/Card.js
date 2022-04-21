import React from "react"

export default function Cards(props) {
    return(
        <div className="main-card">
            <img className="image--header" src={props.item.imageUrl} alt=""/>
            <h3 className="title--header">{props.item.title}</h3>
            <div className="card-location-map">
            <p className="location"><i class="fa-solid fa-location-dot"></i>{props.item.location}</p>
            <p className="maps--location"><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
            </div>
            <div className="date-description">
            <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
            <p className="description">{props.item.description}</p>
            </div>
            </div>
    )
}
import React from "react"
import Navbar from "./component/Navbar"
import Card from "./component/Card"
import data from "./data"
import "./styles.css"

export default function App() {
    const cardValue = data.map(item => {
        return(
            <Card 
                img={item.imageUrl}
                title={item.title}
                location={item.location}
                map={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        )
    })
    return(
        <div>
            <Navbar />
            {cardValue}
        </div>
    )
}
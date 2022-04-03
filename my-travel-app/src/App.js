import React from "react"
import Navbar from "./component/Navbar"
import Card from "./component/Card"
import data from "./data"

export default function App() {
    const cardValue = data.maps(items => {
        return (
            <Card 
                key={items.id}
                {...items}
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

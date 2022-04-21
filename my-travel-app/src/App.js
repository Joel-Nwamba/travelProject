import React from "react"
import Navbar from "./component/Navbar"
import Card from "./component/Card"
import data from "./data"
import "./styles.css"

export default function App() {
    const cardValue = data.map(item => {
        return(
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <section className="card-list-section">
            {cardValue}
            </section>
        </div>
    )
}
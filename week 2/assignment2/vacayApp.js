import React from "react"

import vacayData from "./vacayData"


function App() {
    const VacaySpots = [<vacationSpots />]
    const vacayCards = vacationSpots.map(VacaySpots => < vacaySpots key = {VacaySpots.place} timeToGo = {VacaySpots.timeToGo} price= {VacaySpots.price} />)


   
        return (
            <div>
                <link rel="stylesheet" href="C:\Users\melis\dev\bryan-university\fsw-120\week 2\assignment2\style.css"></link>
                {VacaySpots}            
            </div>
        )
    }
    
    export default App
   
   
   

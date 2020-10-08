import React from 'react';
import jsonData from "./jsonData";


function component(props) {
    console.log(props)
    return (
        <div className="root">
            <background-color>{props.background}</background-color>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <p>{props.info}</p>
        </div>
    )
}


export default App;

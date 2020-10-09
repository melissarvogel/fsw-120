import React from "react"

function HeroList(props) {
    return (
        <div className="todo-item">
            <p>{props.item.name}</p>
        </div>
    )
}

export default HeroList

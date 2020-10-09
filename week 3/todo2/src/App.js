import React from "react"
import TodoItem from "./HeroList"
import HeroList from "./Heros"
import todosData from "./Heros"

function App() {
  const Hero = HeroList.map(hero => <Hero key={hero.name}/>)

    return (
        <div className="todo-list">
           {Hero}
        </div>
    )
}

export default App
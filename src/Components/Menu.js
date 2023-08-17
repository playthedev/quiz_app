import "../App.css";
import React, { useContext } from 'react'
import { GameStateContext } from '../Helper/Context'

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext)

  return (
    <div className="menu">
     <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
              <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>

    </div>
  )
}

export default Menu
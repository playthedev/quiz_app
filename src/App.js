import {useState} from 'react'
import './App.css';
import Menu from './Components/Menu'
import { GameStateContext } from './Helper/Context';
import Quiz from './Components/Quiz';
import Endscreen from './Components/Endscreen'
function App() {
  const [gameState,setGameState]=useState('menu');
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  // console.log('in app');
  return (
    <div className="App">
    <h1>Let's Play Quiz</h1>
    <GameStateContext.Provider value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}>
      {gameState==='menu'&& <Menu/>}
      {gameState==='quiz'&& <Quiz/>}
      {gameState==='finished'&& <Endscreen/>}
      
      </GameStateContext.Provider>
       
       </div>
   );
}

export default App;

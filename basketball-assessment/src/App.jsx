import './App.css'
import BasketballPlayerCard from './components/BasketballPlayerCard'
import "./components/BasketballPlayerCard.css"
import { listOfPlayers } from './components/listOfPlayers'

function App() {

  return (
    <>
      <h1>List of Basketball Players</h1>
      <div className="main-card">
        {listOfPlayers.map((player) => <BasketballPlayerCard
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />)}
      </div>
    </>

  )
}

export default App

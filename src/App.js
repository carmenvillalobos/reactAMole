import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import EmptySlot from './Components/EmptySlot';
import Mole from './Components/Mole'
import MoleContainer from './Components/MoleContainer'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key = {i}
                setScore = {setScore}
                score = {score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App


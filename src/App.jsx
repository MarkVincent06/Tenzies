import { useState } from 'react'
import { nanoid } from 'nanoid'

import Die from './components/Die'

function App() {
    const [dice, setDice] = useState(getAllNewDice())

    // this will generate a new die object
    function generateNewDie() {
        const randomNumber = Math.ceil(Math.random() * 6)

        return {
            id: nanoid(),
            value: randomNumber,
            isHeld: false
        }
    }

    // this will get all new dice
    function getAllNewDice() {
        let newDiceArray = []
        
        for(let i=0; i<10; i++) {
            newDiceArray.push(generateNewDie())
        }

        return newDiceArray
    }

    // rolls the dice 
    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return !die.isHeld ? generateNewDie() : die
        }))
    }

    // holds a die
    function holdDie(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
    }

    const diceElement = dice.map(die => (
        <Die 
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDie={() => holdDie(die.id)}
        />
    ))

    return (
    <main className="font-karla h-screen bg-dark-blue grid place-content-center">
        <div className="bg-white2 rounded-[10px] h-[520px] w-[520px] flex flex-col justify-around p-[60px]">
            <div className="text-center mb-4">
                <h1 className="text-dark-blue font-bold text-[40px]">Tenzies</h1>
                <p className="text-medium-blue text-lg">
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
            </div>

            <div className='grid grid-cols-5 gap-[18px]'>
                {diceElement}
            </div>

            <button onClick={rollDice} className='bg-light-blue py-[10px] px-[21px] rounded-[4px] w-[150px] font-bold text-xl text-white mx-auto mt-6 transition-transform duration-300 active:scale-[0.9]'>
                Roll
            </button>
        </div>
    </main>
    )
}

export default App

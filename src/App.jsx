import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useStopwatch } from 'react-timer-hook';

import Die from './components/Die'
import WinnerPopUp from './components/WinnerPopUp'

function App() {
    // this const is a stopwatch
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    const [dice, setDice] = useState(getAllNewDice())
    const [playerStats, setPlayerStats] = useState({
        noOfRolls: 0,
        timeTaken: {
            seconds: seconds,
            minutes: minutes
        },
        bestTime: {
            seconds: 30,
            minutes: 1
        }
    })
    const [tenzies, setTenzies] = useState(false)

    // this useEffect will determine if the player wins
    useEffect(() => {
        const isWon = dice.every(die => die.isHeld && die.value === dice[0].value)

        if(isWon) {
            pause() // pauses game time
            manageTime()
            setTenzies(true)
        }
    }, [dice])

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
        setPlayerStats(oldStats => ({...oldStats, noOfRolls: oldStats.noOfRolls + 1}))
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

    // new game
    function newGame() {
        reset() // resets game time
        setPlayerStats(oldStats => ({...oldStats, noOfRolls: 0}))
        setTenzies(false)
        setDice(getAllNewDice())
    }

    // manages time
    function manageTime() {
        const bestTime = playerStats.bestTime
       
        if(minutes <= bestTime.minutes && seconds <= bestTime.seconds) {
            setPlayerStats(oldStats => ({...oldStats, 
                bestTime: {
                    seconds: seconds,
                    minutes: minutes
                },
                timeTaken: {
                    seconds: seconds, 
                    minutes: minutes
                }
            }))
        } else {
            setPlayerStats(oldStats => ({...oldStats, timeTaken: {seconds: seconds, minutes: minutes}}))
        }
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

            {
                /* This will render if the player has won */
                tenzies && 
                    <WinnerPopUp 
                        newGame={newGame} 
                        noOfRolls={playerStats.noOfRolls}
                        timeTaken={playerStats.timeTaken}
                        bestTime={playerStats.bestTime}
                    />
            }
        </div>
    </main>
    )
}

export default App

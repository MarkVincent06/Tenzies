import React from 'react'

function Die({ value, isHeld, holdDie }) {

    const diceColor = isHeld ? "bg-light-green" : "bg-white"

    return (
        <div onClick={holdDie} className={`border rounded-[4px] shadow-[0_2px_2px_rgba(0,0,0,0.15)] text-center p-3 cursor-pointer font-bold text-3xl ${diceColor}`}>
            <h3>{value}</h3>
        </div>
    )
}

export default Die;
import React from 'react'

function Die({ value, isHeld }) {
    return (
        <div className='border rounded-[4px] shadow-[0_2px_2px_rgba(0,0,0,0.15)] text-center p-3 cursor-pointer font-bold text-3xl'>
            <h3>{value}</h3>
        </div>
    )
}

export default Die;
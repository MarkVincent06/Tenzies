import React from 'react'
import ReactConfetti from 'react-confetti';

function WinnerPopUp({ newGame, noOfRolls }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <ReactConfetti />
            <div className="bg-white2 p-4 rounded-lg w-[300px] h-[300px] text-center flex flex-col justify-around">
                <h1 className='text-dark-blue font-bold text-[30px]'>You Win!!!</h1>
                <p className='text-medium-blue text-md'>Congratulations on winning tenzies.</p>
                <div className='font-bold'>
                    <h3>Number of Rolls: <span className='font-normal'>{noOfRolls}</span></h3>
                    <h3>Time taken: <span className='font-normal'>10m 40s</span></h3>
                    <h3>Best Time: <span className='font-normal'>6m 30s</span></h3>
                </div>
                <button  
                    onClick={newGame}
                    className='bg-light-green py-[10px] px-[21px] rounded-[4px] w-[150px] font-bold text-xl text-white mx-auto mt-6 transition-transform duration-300 active:scale-[0.9]'>
                    New Game
                </button>
            </div>
        </div>
    )
}

export default WinnerPopUp;
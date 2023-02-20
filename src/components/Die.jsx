import React from 'react'

function Die({ value, isHeld, holdDie }) {
    const dieColor = isHeld ? "bg-light-green" : "bg-white"
    let dieFace = ""

    switch (value) {
        case 1:
            dieFace = (
                <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-2 col-span-3 justify-self-center' />
            )
            break;
        case 2:
            dieFace = (
                <>
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-span-3 justify-self-end' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-span-3 justify-self-start' />
                </>
            )
            break;
        case 3:
            dieFace = (
                <>
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-span-3 justify-self-end' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-2 col-span-3 justify-self-center' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-span-3 justify-self-start' />
                </>
            )
            break;
        case 4:
            dieFace = (
                <>
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-start-3' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-start-3' />
                </>
            )
            break;
        case 5:
            dieFace = (
                <>
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-start-3' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-2 col-start-2' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-start-3' />
                </>
            )
            break;
        case 6:
            dieFace = (
                <>   
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-2 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-start-1' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-1 col-start-3' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-2 col-start-3' />
                    <div className='rounded-full bg-dark-blue2 w-[12px] h-[12px] self-center row-start-3 col-start-3' />
                </>
            )
            break;
        default:
            break;
    }

    return (
        <div onClick={holdDie} className={`border rounded-[4px] shadow-[0_2px_2px_rgba(0,0,0,0.15)] w-[60px] h-[60px]  p-2 grid grid-cols-3 grid-rows-3 gap-1 cursor-pointer ${dieColor}`}>
            {/* <h3>{value}</h3> */}
            {dieFace}
        </div>
    )
}

export default Die;
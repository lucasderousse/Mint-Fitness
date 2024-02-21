import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>Fitness...</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-green-400'>Simplified</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>A completely<span className='text-green-400 font-medium'> free to use, open source</span> workout generator made for gym bros, <span className='text-green-400 font-medium'>by a gym bro</span>.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Let\'s Go!"}></Button>
            <p className='text-xs'>Checkout the <a href="https://lucasderousse.github.io/" className='font-bold text-green-400 underline'>creator</a>, or the <a href="" className='font-bold text-green-400 underline'>github</a> for this project</p>
        </div>
    )
}

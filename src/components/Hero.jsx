import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap 10 items-center justify-center text-center text-2xl p-4'>
      <div className='flex flex-col gap-4'>
      <p>Fitness...</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-1'><span className='text-green-400'>Simplified</span></h1>
      </div>
      <p className='text-sm md:text-md font-light p-4'>A lightweight, simple, fitness app made by a <span className='text-green-400 font-medium'>Gym Bro!</span></p>
      <Button text={"Let's Go!"}></Button>
    </div>
  )
}

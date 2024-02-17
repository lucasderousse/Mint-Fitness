import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/minty'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}
export default function Generator() {
  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')
  //let showModal = false

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 3) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 3) {
      setShowModal(false)
    }
  }

  return (
    <SectionWrapper header={"Simplify Fitness"} title={['Revolutionize', 'your', 'workout']}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout youd like to endure"} />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setPoison(type)
            }} className={'bg-slate-950 border duration-500 border-green-400 hover:border-green-900 py-3 rounded-lg' + (type === poison ? ' border-green-900' : ' border-green-400')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
      <Header index={'02'} title={'Lock On Targets'} description={"Select the Muscles you'd like to work."} />
      <div className='bg-slate-950 border border-solid border-green-400 hover:border-green-700 duration-500 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative flex items-center p-3 justify-center'>
          <p className='capitalize'>{muscles.length == 0 ? 'Select muscle Groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-angles-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={() => {
                  updateMuscles(muscleGroup)
                }} key={muscleGroupIndex} className={'hover:text-green-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-green-400' : ' ')}>
                  <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>
      <Header index={'03'} title={'Feel fresher than ever!'} description={"Select your goal."} />
      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoal(scheme)
            }} className={'bg-slate-950 border duration-500 border-green-400 hover:border-green-900 py-3 rounded-lg' + (scheme === goal ? ' border-green-900' : ' border-green-400')} key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

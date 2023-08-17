import React, { useEffect } from 'react'
import Contact from './Contact'
import About from './About'
import Hero from './Hero'
import { useParams } from 'react-router-dom'
// import { ContextData } from '../context/Context'

const Home = () => {
  // const {sortedData,setSortedData} = ContextData()
  const {name}=useParams()
  // console.log(name,"myname")
  return (
    <>
    <Hero name={name}/>
      <About/>
      <Contact/>
      </>
  )
}

export default Home
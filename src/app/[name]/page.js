import React from 'react'
import MyHome from '../components/MyHome'
// import Hero from '../components/Hero'
MyHome

const page = ({params}) => {
  return (
    <div>
        <h1 className='text-black'>{params.name}</h1>
        {/* <Hero name={params.name}/> */}
        <MyHome name={params.name}/>
    </div>
  )
}

export default page
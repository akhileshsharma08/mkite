import React from 'react'
import { ContextData } from '../context/Context'
import { Link } from 'react-router-dom'

const List = () => {
    const {empData}= ContextData()
  return (
    <div>{empData.map((ele)=>(
        <>
        <Link to={`https://mkite.vercel.app/${ele.firstName}`} key={ele.id}>
        <h1 className='text-blace mx-4 '>{ele.firstName}</h1>
        </Link>
        </>
    ))}</div>
  )
}

export default List
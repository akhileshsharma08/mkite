'use client'

import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

const Context = ({children}) => {
    const [empData,setEmpData] = useState([])
    const [loading,SetLoading] = useState(true)

    const handleData= async()=>{
      const res= await fetch(`https://6458a1858badff578ef64314.mockapi.io/mkite/`)
      console.log(res.json())
      
      return res.data


    }


    useEffect(() => {
        // Fetch data from your API and update apiData state
        const fetchData = async () => {
          try {
            const response = await fetch(`https://6458a1858badff578ef64314.mockapi.io/mkite/`);
            const data = await response.json();
            setEmpData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


  return (
    <MyContext.Provider value={{empData}} >{children}</MyContext.Provider>
  )
}

export default Context
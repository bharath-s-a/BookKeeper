import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Bookpage() {
  const[from,setfrom]=useState('')
  const[to,setto]=useState('')

  const location = useLocation()
  const bookId = location.state?.bookid

  console.log(bookId)

  function apply(){
    axios.post(`http://localhost:3000/apply/${from}/${to}`)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.error(err)
    })

  }




  return (
    <div className='main'>
      <div className='datepage'>


  <div className='date'>
        <label htmlFor="start">From</label>
        <input id='start' name='start' type='date'  onChange={(e)=>setfrom(e.target.value)}></input>
        </div>

        <div className='date'>
        <label htmlFor="start">To</label>
        <input id='start' name='start' type='date' onChange={(e)=>setto(e.target.value)} ></input>
        </div>

        <button onClick={()=>{
          apply()
        }} >Apply</button>






      </div>
        


    
    </div>
  )
}

export default Bookpage
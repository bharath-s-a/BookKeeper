import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Next() {
const[id,setid]=useState('')
const[name,setname]=useState('')
const[title,settitle]= useState('')
const[sub,setsub]=useState('')
const[count,setcount]=useState('')




function namesearch(){
    axios.get(`http://localhost:3000/nextname/${name}`).then((res)=>{
        console.log(res.data[0].val)
        setcount(res.data[0].val)
        
    })
}

function titlesearch(){
    axios.get(`http://localhost:3000/nexttitle/${title}`).then((res)=>{
        console.log(res.data[0].val)
        setcount(res.data[0].val)
        
    })
}

function subjectsearch(){
    axios.get(`http://localhost:3000/nextsubject/${sub}`).then((res)=>{
        console.log(res.data[0].val)
        setcount(res.data[0].val)
        
    })
}

function fetch(){
    axios.get(`http://localhost:3000/nextfull`).then((res)=>{
        console.log(res.data[0].val)
        setcount(res.data[0].val)

        
    })
}


useEffect(()=>{
 fetch()
},[])


  return (
    <>
    <div className='main'>  

    <div className='search'>

    <div className='searchin'>

        <h1>ENTER BOOK DETAILS</h1>
        

        <label htmlFor='namesearch'></label>
        <input type="text" id='namesearch' name='namesearch' placeholder='Enter name'  onChange={(e)=>{setname(e.target.value)}} />
        <button  onClick={()=>{
            namesearch()
        }}>
            search
        </button>


        <label htmlFor='titlesearch'></label>
        <input type="text" id='titlesearch' name='titlesearch' placeholder='Enter title' onChange={(e)=>{settitle(e.target.value)}} />
        <button
        onClick={()=>{
            titlesearch()
        }}
        
        >search</button>

        <label htmlFor='subjectsearch'></label>
        <input type="text" id='subjectsearch' name='subjectsearch' placeholder='Enter subject' onChange={(e)=>{setsub(e.target.value)}} />
        <button  onClick={()=>{
            subjectsearch()
        }}>search</button>

    </div>




   <div className='layout'>

    <h2>BOOK AVAILABLE</h2>
    <h1 id='val'>{
        count
    }</h1>





   </div>





    </div>
    

    </div>




    </>


    
  )
}

export default Next
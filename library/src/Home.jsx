import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Home() {
 const[id,setid]=useState('')
 const[title,settitle]=useState('')
 const[name,setname]=useState('')
 const[book,setbook]=useState('')

 

useEffect(()=>{
    fetch()
},[])


    const[details,setdetails]=useState([])

    function fetch(){
        axios.get(`http://localhost:3000/fetch`).then((res)=>{
            console.log(res.data)
            setdetails(res.data)
        })
    }
    function searchid(){
      axios.get(`http://localhost:3000/searchid/${id}`).then((res)=>{
            console.log(res.data)
            console.log("title")
            setdetails(res.data)
        })

    }
    function searchtitle(){
      axios.get(`http://localhost:3000/searchtitle/${title}`).then((res)=>{
            console.log(res.data)
            console.log("title")
            setdetails(res.data)
        })
z
    }

    function booking(bid){
      axios.get(`http://localhost:3000/book/${bid}`).then((res)=>{
        console.log(res)
      })
    }




    function searchname(){
      axios.get(`http://localhost:3000/searchname/${name}`).then((res)=>{
            console.log(res.data)
            console.log("name")
            setdetails(res.data)
        })

    }

    function adminadd(bid,bname,btitle,bsub){
      axios.get(`http://localhost:3000/adminadd/${bid}/${bname}/${btitle}/${bsub}`)
          .then(()=>{
              alert('Added Successfully')
          })
     
    }

    function gobkpage(){

    }


  return (
    <div className='main'>
      <Link to="/next">
    <button  id='nxt'>
      Book Count
     </button>
    </Link>

    <Link to="/">
    <button   id='logout'>logout</button>
    </Link>

   

      <div className='search'>

        <div className='searchin'>
        <label htmlFor="ids"></label>
        <input type="text" id="ids" placeholder="Enter Title"  onChange={(e)=>{setid(e.target.value)}}/>
        <button  onClick={()=>{
          searchid()
        }}>Search</button>
        </div>
        <div className='searchin'>
        <label htmlFor="title"></label>
        <input type="text" id="title" placeholder="Enter subject"  onChange={(e)=>{settitle(e.target.value)}} />
        <button  onClick={()=>{
          searchtitle()
        }}>Search</button>
        </div>
        <div className='searchin'>
        <label htmlFor="author"></label>
        <input type="text" id="author" placeholder="Enter Author"  onChange={(e)=>{setname(e.target.value)}} />
        <button  onClick={()=>{
          searchname()
        }}>Search</button>
        </div>

       
         
      </div>
      

    
    
      <div className='scroll'>
      <div className='tab'>
        <table >
            <thead>
            <th><b>BOOK ID</b></th><th><b>TITLE</b></th><th><b>AUTHOR</b></th><th><b>SUBJECT</b></th><th><b>PUBLISHED</b></th><th><b>BOOK</b></th>
            </thead>

         
            <tbody>
            

               {
                details.map((detail)=>(

                    <tr  >
                    <td> {detail.bookid} </td>    
                    <td> {detail.title} </td>   
                    <td> {detail.author} </td>   
                    <td> {detail.bsubject} </td> 
                    <td> {detail.publishdate} </td>
                    <td> 


                    <Link to={{pathname:'/bookpage', state:{bookid:"helo"}  }} >  <button  id='homebtn' onClick={()=>{

adminadd(detail.bookid,detail.author,detail.title,detail.bsubject)
booking(detail.bookid)
alert("booked")
adminadd(detail.bookid,detail.author,detail.title,detail.bsubject)
window.location.reload()
}} >apply</button>   </Link>
{/* <Link to={{pathname:'/bookpage', state:{bookid: detail.bookid}  }} >
  <button onClick={()=>{
    adminadd(detail.bookid,detail.author,detail.title,detail.bsubject)
  }}>book</button>
</Link> */}
                    
                    
                    
                     </td>


                   

                </tr>
                ))
                
               }


               
                
                
            </tbody>
        </table>
      </div>

       </div>

    
    




    </div>
  )
}

export default Home
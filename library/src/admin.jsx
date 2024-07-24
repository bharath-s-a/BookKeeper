import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Admin() {
    const[name,setname]=useState('')
    const[title,settitle]=useState('')
    const[subject,setsubject]=useState('')
    const[date,setdate]=useState('')
    const [dataList, setDataList] = useState([])
    const[rmid,setrmid]=useState('')



    function add(){
        axios.get(`http://localhost:3000/add/${name}/${title}/${subject}/${date}`).then((res)=>{
            console.log("data added")
        })
    }
    

    function fetch(){
        axios.get(`http://localhost:3000/adminfetch`).then((res)=>{
            console.log(res.data)
            setDataList(res.data)



        })
    }


    useEffect(()=>{
 fetch()
    },[])

    function remove(id){
        axios.get(`http://localhost:3000/adminremove/${id}`)
        .then((res)=>{
            console.log(res)
        })
    }


    function bkremove(){
        axios.get(`http://localhost:3000/adminrem/${rmid}`)
        .then((res)=>{
            console.log(res)
        })

    }



    







  return (
    <div  className='adminmain'>
         <div className='adminform'>

            <Link  to="/">   <button id='alogout'>logout</button> </Link>
           

        <form className='form' >
            <h1>ADD BOOK</h1>
            <label htmlFor='name'>Author</label>
            <input type="text" name='author' id='author'  onChange={(e)=>{setname(e.target.value)}} />
            <br />
            <br />

            <label htmlFor='title'>Title</label>
            <input type="text" name='title' id='title' onChange={(e)=>{settitle(e.target.value)}} />
            <br />
            <br />

            <label htmlFor='subject'>Subject</label>
            <input type="text" name='subject' id='subject'  onChange={(e)=>{setsubject(e.target.value)}} />
            <br />

<br />
            <label htmlFor='date'>Publishdate</label>
            <input type="date" name='date' id='date'   onChange={(e)=>{setdate(e.target.value)}}/>
            <br />

            <button onClick={()=>{
                add()
                alert("book Added")
            }}> submit</button>


<h1>Remove Book</h1>

<label htmlFor='bkid'>Enter book ID</label>
            <input type="text" name='bkid' id='bkid'   onChange={(e)=>{setrmid(e.target.value)}}/>
            <button  onClick={()=>{
                bkremove()
                alert("book removed")

            }}>Remove</button>





<br />

        </form>
        
        </div>
        <h1>BOOKED  LIST :-</h1>


        <table className='admintable' >

          
            <thead>
            <th><b>BOOK ID</b></th><th><b>TITLE</b></th><th><b>AUTHOR</b></th><th><b>SUBJECT</b></th><th><b>REMOVE</b></th>
            </thead>

         
            <tbody>
                {
                    dataList.map((data)=>(


                        <tr  >
                        <td> {data.booked} </td>    
                        <td> {data.author} </td>   
                        <td> {data.title} </td>     
                        <td> {data.sub} </td> 
                        <td> <button onClick={()=>{
                            remove(data.booked)

                            window.location.reload()
                            alert("book added to maintable")
                            
                        }}>remove</button></td> 
                       
                    </tr>

                    ))
                }

               
                

            
                
               


               
                
                
            </tbody>
        </table>


    </div>
  )
}

export default Admin
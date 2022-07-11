import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataRouting() {
   const[post, setPosts ]=useState([]) 
   const [InputData,setInputData]=useState({Name:"",Username:"",email:""})

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    
   // data from api stores in (res)
   
     .then((res)=>{
        //  console.log(res)
         setPosts(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
 },[])
 const PostEvent=()=>{
   
 }



  return (
    <>
    <center>
   <h1> API EXample</h1>
   <input type="text" placeholder='Name' value={InputData.Name} onChange={(e)=>{setInputData(e.target.value)}} name='name' /><br></br> <br />
   <input type="text" placeholder='Username' value={InputData.Username} onChange={(e)=>{setInputData(e.target.value)}} name="Username"  /><br></br> <br></br>
   <input type="text" placeholder='email' value={InputData.email} onChange={(e)=>{setInputData(e.target.value)}} /><br></br> <br></br> 
   <button type='button'onClick={PostEvent} > Submit!!!</button>
   </center>
   <ul>
      
       {
         post.map((item)=>{
         return <li key={item.id}>{item.name}</li>
            
         })
       }
   </ul>
    </>
  )
}

export default DataRouting
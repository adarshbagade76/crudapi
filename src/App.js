import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import User from './Api Reacting/User'
import Home from './Api Reacting/Home'
import axios from 'axios'



function App() {
  const [newobj,setobj]=useState({})
  const [AddItem, setIteam] = useState([]);

  const APIDATA=(data)=>{
  
    setIteam(data)
  }

  const userLists=(obj)=>{
  setIteam([...AddItem,obj])
 }


  const editobj=(obj)=>{
  debugger
    setobj(obj)

  }

  const updateobj=(obj)=>{
      
    var arr = AddItem.map((elem)=>{
      
      return  obj.id == elem.id?obj:elem

    })
    setIteam(arr)
    
  }
  
  const deleteItem=(id)=>{

   var arr=AddItem.filter((elem)=> id!==elem.id)
     setIteam(arr)
    
  }

  

  return (
     <> 
       <BrowserRouter> 
      
 

           <Routes>
         <Route path='/' element={<Home userobj={editobj} addUser={userLists} items={AddItem} delete={deleteItem} demo={APIDATA}/>}/>
       <Route path='/User/:id' element={<User user={newobj} newobj={ updateobj} />}/>
       </Routes>
      
      
           


</BrowserRouter>  
     
    </>
  

  )
}

export default App 
 
 
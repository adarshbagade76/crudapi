
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios";





function User(props) {

 const navigate=useNavigate();

 const[inputData, setInputData]=useState({id:props.user.id,username:props.user.username,  email: props.user.email })

 const handlesubmit=()=>{
  
  axios.put(`https://jsonplaceholder.typicode.com/users/${props.user.id}`,{
    username:inputData.username,
    email:inputData.email
  })
  .then((res)=>{
    debugger
    props.newobj(res.data)
  
  })
  navigate('/')
 }



  
 return (
  <>
  <center>      
        <div className="card" >
        <div className="card-body">
   <form>  
  <input type='text' placeholder='FirstName' value={inputData.username} onChange={(e)=>setInputData({...inputData,username: e.target.value})}/><br /><br />
  <input type='text' placeholder="Email"  value={inputData.email} onChange={(e)=>setInputData({...inputData,email:e.target.value})}/><br /><br />
 <button type="submit"  className="btn btn-danger "onClick={() => navigate('/')} >Cancel</button>  
    <button className="btn btn-dark "onClick={handlesubmit} >Update</button>
   </form>  
</div>
</div>
</center>
  </>
 )
}

export default User
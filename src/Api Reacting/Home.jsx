// import { Button } from "bootstrap";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams} from 'react-router-dom'





const Home=(props)=> {
 
  const[inputData, setInputData]=useState({id:1,username: "", email: ""})
    const [AddItem, setIteam] = useState(props.items);
   
  const navigate=useNavigate();
  const {id}=useParams();
const url="https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    const fetchDAta=async url =>{
      let response= await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(response)
    //  props.demo(response.data)
       }
       fetchDAta(url)
  },[])






    const additem=async()=>{
     
      await axios.post("https://jsonplaceholder.typicode.com/users",{
        username:inputData.username,
        email:inputData.email
      })
    .then((res)=>{
      props.addUser(inputData)
      // setIteam([...AddItem,inputData]) we should write in App bcz it should be done routing
setInputData( {id:Math.random().toString(16).slice(2),username:'',email:""})
    })

   }
   
    const  onEdit=(item)=>{    
    props.userobj(item)
  debugger
       navigate('/User')
    }

   
    const deleteItem=(id)=>{
       axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res)=>{
     props.delete(id)
     })
   }
  

   return (
    
     
       <center>   
         
         <div className="card" >
         <div className="card-body">
        
   <input type='text' placeholder='username'value={inputData.username} onChange={(e)=>setInputData({...inputData,username: e.target.value})}/><br /><br />
  
    <input type='text' placeholder="Email" value={inputData.email} onChange={(e)=>setInputData({...inputData,email:e.target.value})}/><br /><br />
    
   <button type="button" class="btn btn-dark"onClick={additem}>ADD</button>
   <table className="table">
  <thead>
    <tr>
     
      <th scope="col">userame</th>
    
      <th scope="col">email</th>
  </tr>
  </thead>
  <tbody>

  { 
    props.items.map((item)=>{
     return (
      
    <tr key={item.id}>
   
    <td>{item.username}</td>
   
    <td>{item.email}</td>
   
  <td><Link to={`/User/${item.id}`} role={'button'}  className="btn btn-primary" onClick={()=>onEdit(item)}>Edit</Link></td>
  <td><button type="button" className="btn btn-secondary"onClick={()=>deleteItem(item.id)}>Delete</button></td>
      </tr>

     )
   })   
  
   
} 
  
     
  </tbody>
</table>
</div>
</div>

</center>
  
  )
}

export default Home
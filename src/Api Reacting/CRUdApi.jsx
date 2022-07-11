
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CRUdApi = () => {
  const [inputData, setInputData] = useState({ username: "", email: "" })
  const [user, setuser] = useState([])



  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
    setuser(response.data)
  }


  // axios.post('https://jsonplaceholder.typicode.com/posts', { username: inputData.username, email: inputData.email })
  //   .then(response => setuser({ username: response.data, email: response.data }));

  return (
    <>
      <center>
        < div className="container mt-5">
          <div className='col-md-4'>
            <div className="bg-success p-2 text-white">

              <span><h1>To Do List Using AXIOS</h1></span>

              <form>
                <input type='text' placeholder='username' value={inputData.username} onChange={(e) => setInputData({ username: e.target.value })} name='fn' /><br /><br />
                <input type='text' placeholder='email' value={inputData.email} onChange={(e) => setInputData({ email: e.target.value })} name='fn' /> <br /><br />
                <button type="button" class="btn btn-dark">ADD</button>
              </form>

              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th ></th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>

                  </tr>
                </thead>
                <tbody>
                  {/* /* map method used to create & display the new array  */}
                  {
                    user.map((item) => {
                      return (

                        <tr>
                          <th key={item.id}></th>
                          <td>{item.username}</td>
                             <td>{item.email}</td>
                          <td><button type="button" class="btn btn-primary" onClick={()=>onEdit(item,ind)}>Edit</button></td>
      <td><button type="button" class="btn btn-secondary"onClick={()=>deleteItem(ind)}>Delete</button></td>
                        </tr>)
                    })
                  }
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </center>
    </>
  )
}
export default CRUdApi
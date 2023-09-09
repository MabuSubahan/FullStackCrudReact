import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUser] = useState([]);
    useEffect (()=>{
        loadUsers()
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/user/getUsers");
        setUser(result.data);
    };
  return (
    <div className='countainer'>
        <div className='py-4'>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">EmailId</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
       {
        users.map((user,index)=>(

            <tr>

            <th scope="row" key={index}>{index+1}</th>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>
                <button className="btn btn-primary mx-2">View</button>
                <Link className="btn btn-outline-primary mx-2"
                to={`/edituser/${user.id}`}
                
                >Edit</Link>
                <button className="btn btn-danger mx-2">Delete</button>

                
                </td>
            </tr>



        ))
       }
  </tbody>
</table>
        </div>
    </div>
  )
}

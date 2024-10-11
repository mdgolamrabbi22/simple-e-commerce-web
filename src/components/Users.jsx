import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {

    const [users,setUsers] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
},[])

// console.log(users)

  return (
    <div>
      <h1 className='text-center text-4xl font-semibold mt-4'>All Users</h1>
      <div className='grid grid-cols-3 gap-4'>
        {
            users.map((user)=><div className="card bg-base-100 shadow-xl">
            
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.username}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
              <div className="card-actions justify-end">
                <Link to="/contact">
                <button className="btn btn-primary text-white">Contact Now</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

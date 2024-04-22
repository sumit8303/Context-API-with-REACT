import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function AddTodo() {
    let [inp, setInp] = useState('')
    // this comment for git
    let {setUser} = useContext(UserContext)
    function saveTodo(){
        let todo = { 
            id: Date.now(), 
            text: inp 
        }
        console.log(todo) 
        let data = JSON.parse(localStorage.getItem('todo')) || [] 
        data.push(todo) 
        localStorage.setItem('todo', JSON.stringify(data)) 
        setUser(data) 
        setInp('') 
    } 
  return (
    <div className='flex flex-col h-[150px] justify-between items-center'>
      <h1 className='text-center text-4xl font-bold mt-[20px] text-red-600'>Add Todo's</h1>
     <div className='w-full flex justify-center'>
     <input type="text" className='border-2 border-black rounded w-1/2 p-2' placeholder='Enter your Todo' id="name" value={inp} onChange={(e)=>setInp(e.target.value)}/>
     <button className='p-2 bg-red-400 text-white rounded ml-4 hover:bg-red-600 hover:text-black' onClick={saveTodo} >Add Todo</button>
     </div>
    </div>
  )
}

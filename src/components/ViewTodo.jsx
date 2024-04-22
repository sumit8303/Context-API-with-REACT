import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

export default function ViewTodo() {
    let [data, setData] = useState([])

    let {user} = useContext(UserContext)

    useEffect(()=>{
        getData()
    }, [user])

    function getData(){
        let result = JSON.parse(localStorage.getItem('todo')) || []
        setData(result)
    }

    function deleteData(id){
        let result = data.filter((item)=> item.id !== id)
        localStorage.setItem('todo', JSON.stringify(result) )
        setData(result)
    }
   

  return (
    <>
    {data.map((item)=>(
     
        <div className='w-full flex flex-col justify-center items-center mt-[50px]' key={item.id}>
      <div className='flex bg-gray-400 justify-between w-9/12 p-2 text-2xl rounded'>
    <div>{item.text}</div>
    <button onClick={()=>deleteData(item.id)}>❌</button>
  </div>
  </div>      
    ))}
    </>
  )
}

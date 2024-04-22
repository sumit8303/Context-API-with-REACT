import React from 'react'
import AddTodo from './components/AddTodo'
import ViewTodo from './components/ViewTodo'
import UserContextProvider from './context/UserContextProvider'

export default function App() {
  return (
   <UserContextProvider>
     <AddTodo/>
      <ViewTodo/>
   </UserContextProvider>
     
    
  )
}

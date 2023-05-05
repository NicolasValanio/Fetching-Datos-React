import { useEffect, useState } from 'react'
import './App.css'
import { UsersList } from './componentes/usersList'


function App() {
  const [users, setUsers] = useState([]);
  const [showColors, SetshowColors] = useState(false)
  const toogleColor = ()=>{
    SetshowColors(!showColors)
  }
  const api = "https://randomuser.me/api?results=100"
  
  useEffect (()=>{
    fetch(api)
    .then( async res => await res.json()) 
    .then(res => {
      setUsers(res.results)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  return (
      <div>
        <h1>Prueba Tecnica</h1>
        <header>
          <button onClick={toogleColor}>
            Colorear Files
          </button>


        </header>

        <main>
        <UsersList showColors={showColors} users={users}/>
        </main>
      </div>
  )
}

export default App

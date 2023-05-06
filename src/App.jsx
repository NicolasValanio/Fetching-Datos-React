import { useEffect, useState } from 'react'
import './App.css'
import { UsersList } from './componentes/usersList'


function App() {
  const [users, setUsers] = useState([]);

  const [showColors, SetshowColors] = useState(false)

  const [sortByCountry, setSortBuCountry] = useState(false);

  const toggleSortByCountry =()=>{{setSortBuCountry(prevState => !prevState)}}

  const toogleColor = ()=>{
    SetshowColors(!showColors)
  }
  const api = "https://randomuser.me/api?results=100"
  
  const handleDelete = (email) =>{
    const filteredUsers = users.filter((user)=> user.email !== email)
    setUsers(filteredUsers)
  }
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

  const sortedUsers = sortByCountry ? users.toSorted((a,b)=>{
    return a.location.country.localeCompare(b.location.country)
  }) : users

  return (
      <div>
        <h1>Prueba Tecnica</h1>
        <header>
          <button onClick={toogleColor}>
            Colorear Files
          </button>

          <button onClick={toggleSortByCountry}>
            {sortByCountry ? 'No ordenar por país' :'Ordenar por País'  }
          </button>


        </header>

        <main>
        <UsersList deleteUsers={handleDelete} showColors={showColors} users={sortedUsers}/>
        </main>
      </div>
  )
}

export default App

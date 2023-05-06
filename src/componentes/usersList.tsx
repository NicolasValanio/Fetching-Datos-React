import { type Result } from "../types.d"
import React from "react"

interface Props {
    users : Result[]
    showColors : boolean
    deleteUsers: (email : string) =>void
}
 export function UsersList ({deleteUsers,showColors,users} : Props) {
    return(
        <div> 
        <table width="100%">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((user, index) => {
                        const backgroundColor = index % 2 === 0 ? '#333' : '#555'
                        const color = showColors ? backgroundColor : 'transparent'
                        return(
                            <tr key={user.email} style={ {backgroundColor : color}}>
                                <td>
                                    <img src={user.picture.thumbnail} />
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                    {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                                <td>
                                    <button onClick={()=>{
                                        deleteUsers(user.email)
                                    }}>Borrar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
 }
import React, {useEffect, useState} from 'react'

export default function Fetch(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users").then(res=> res.json()).then(data => setUsers(data));

    },[])
    return(
        <div>
            <h1>USER DATA</h1>
            <ul>
                {
                    users.map(user =>{
                        return <li key={user.id}>{user.login}</li>
                    })
                }
            </ul>

        </div>

    )
}
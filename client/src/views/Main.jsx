import {useState, useEffect} from 'react';
import Axios from 'axios';

const Main = props => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:8000/api/users", {withCredentials: true})
        .then(res => setUsers(res.data.results))
        .catch(err => {
            console.log(err)
        })
    })

    return(
        <div>
            {
                users.map((user,i) =>{
                    return <p key={i}>{user.firstName}{user.lastName}</p>   
                }
                )
            }
        </div>
    )
}

export default Main;
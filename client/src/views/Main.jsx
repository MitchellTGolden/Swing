import {useState,useEffect} from "react";
import Axios from 'axios';
import {navigate, Link} from '@reach/router';
import NavBar from '../components/NavBar';

const Main = props => {

    const [users,setUsers] = useState([]);
    const [loggedIn,setLoggedIn] = useState( JSON.parse(localStorage.getItem("user")) || {firstName:"YOU",lastName:"BROKE"})
    useEffect(() => {
        
        Axios.get("http://localhost:8000/api/users",{withCredentials:true})
            .then(res => setUsers(res.data.results))
            .catch(err => {
                if(err.response.status === 401){
                    navigate('/');
                }
            })
    })  



    return(
        <div>
            <NavBar />
            <div>
            <div className="d-flex justify-content-between m-3">
            <h5 className="text-center">Welcome {loggedIn.firstName} {loggedIn.lastName}</h5>
            
            </div>
            {
                users.map((user,i) => {
                    return <p key={i}>
                        <Link to={`/user/${user._id}`}>Testing</Link>
                        {user.firstName} {user.lastName}</p>
                })
            }
        </div>
        </div>
    );

}


export default Main;
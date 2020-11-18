import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import NavBar from '../components/NavBar';

const User = props => {
    const [user, setUser] = useState([])
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/swing/user/${props.id}`)
            .then(res => {
                setUser(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => console.log(err))
    }, [props])
    //cant pass in [deleted] What?

    function deleteUser(user_id) { 
        if (window.confirm("Are you sure you want to delete your account?")) {
            Axios.delete(`http://localhost:8000/swing/user/delete/${user_id}`)
            .then(res => {
                if(res.data.results){
                    console.log("User deleted!")
                    setDeleted(!deleted);
                    navigate('/')
                    alert("User has been deleted")
                }
            })
            .catch(err => console.log(err))
            return true;
        }
        return false;
    }


    return (
        <div>
            <div>
                <NavBar />
                <h1>Name: {user.firstName}</h1>
                <button onClick={() => deleteUser(props.id)}>Delete</button>
                <Link to={`/swing/user/update/${props.id}`}>Edit User</Link>
                {/* not finished */}
            </div>
        </div> 
        
    );
}

export default User;
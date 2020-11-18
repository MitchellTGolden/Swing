import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';

const NavBar = props => {
    const logout = () => {
        Axios.get('http://localhost:8000/api/logout',{withCredentials:true})
            .then(res => {
                localStorage.clear();
                navigate('/')})
            .catch(err => console.log(err));
    }

    return (
<div>   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/dashboard" className="nav-link">Room 42</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/dashboard" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active">
            <Link to="/newgame" className="nav-link">Create Game</Link>
            </li>
            <li className="nav-item active">
            <Link to="/games" className="nav-link">View Games</Link>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <button onClick={logout} className="btn ">Logout</button>
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    </div> 
    )
}

export default NavBar;
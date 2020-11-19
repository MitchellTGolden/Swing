import {useState,useEffect} from "react";
import Axios from 'axios';
import {navigate, Link} from '@reach/router';
import NavBar from '../components/NavBar'

const Games = props => {

    const [games,setGames] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/games')
            .then(res => {
                setGames(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])


    return(
        <div>
            <NavBar />
            <div>
            <div className="d-flex justify-content-between m-3">

            
            </div>
            {
                games.map((game,i) => {
                    return <p key={i}>
                        <Link to={`/game/${game._id}`}>{game.name}</Link><br></br>
                        Location: {game.location}</p>
                })
            }
        </div>
        </div>
    );

}


export default Games;
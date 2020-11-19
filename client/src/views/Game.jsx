import Axios from 'axios';
import { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import NavBar from '../components/NavBar'

const AddPlayers = props => {
    const [playerForm, setPlayerForm] = useState({})
    const[player, setPlayer] = useState([])
    const [games, setGames] = useState([])
    const [playerNum, setPlayerNum] = useState(1)
    const [loaded,setLoaded] = useState(false);
    
    useEffect(() => {
        Axios.get(`http://localhost:8000/swing/game/${props.gameId}`,{withCredentials:true})
            .then(res => {
                console.log(res.data.results)
                setGames(res.data.results)
                setLoaded(true);
            })
    }, [props])

    const handlePlayerInput = e => {
        setPlayerForm({
            ...playerForm,
            _id :e.target.value
            
        })
        console.log(playerForm)
    }
    const handlePlayerNumInput = e => {
        setPlayerNum({
            playerNum :e.target.value
            
        })
    } 

    return (
        <div>
            <NavBar/>
        </div>
    )
}
export default AddPlayers;
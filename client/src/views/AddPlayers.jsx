import Axios from 'axios';
import { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';

const AddPlayers = props => {
    const [playerForm, setPlayerForm] = useState({})
    const[player, setPlayer] = useState([])
    const [games, setGames] = useState([])
    const [playerNum, setPlayerNum] = useState(1)
    
    useEffect(() => {
        Axios.get(`http://localhost:8000/swing/game/${props.gameId}`)
            .then(res => {
                console.log(res.data.results)
                setGames(res.data.results)
            })
            .then(
                Axios.get('http://localhost:8000/users')
                .then(res => {
                setPlayer(res.data.results)
                })
                .catch(err => console.log(err)))
            .catch(err => console.log(err))
    }, [props])

    const handlePlayerSumbit = e => {
        e.preventDefault();
        console.log(`Player Form Value : ${playerForm._id}`)
        Axios.get(`http://localhost:8000/swing/addptog/${playerForm._id}/${props.gameId}/player`+playerNum)
            .then(res => console.log(res))
            .then(navigate(`/game/${props.gameId}`))
            .then(setPlayerNum(playerNum + 1))
            .catch(err => console.log(err)) 
    }

    const handlePlayerInput = e => {
        setPlayerForm({
            ...playerForm,
            _id :e.target.value
            
        })
        console.log(playerForm)
    } 

    return (
        <div>
            <h2>Name: {games.name} </h2> 
            <h2>location: {games.location} </h2>
            
            <form onSubmit={handlePlayerSumbit}>
            <select value={playerForm._id} onChange={handlePlayerInput}>
                <option>Choose a Player</option>
            {player.map((user,i) => {
                return <option key={i}
                    value={user._id}>
                    {user.firstName} {user.lastName}
                    </option>
                })
            }
            </select>
            {/* {player.firstName}
                input */}
            <input type="submit" className="btn btn-primary" value={`Add as Player ${playerNum}`}/>
            </form>
                
            {/* <div>
            {games.player1.user === undefined ? 
                ""
                : 
                <p>
                Player 1 : {games.player1.user.firstName}{games.player1.user.lastName}
                </p>
                }
            </div>
            <div>
            {games.player2.user.firstName === undefined ? 
                ""
                : 
                <p>
                Player 2 : {games.player2.user.firstName}{games.player2.user.lastName}
                </p>
                }
            </div>
            <div>
            {games.player3.user.firstName === undefined ? 
                "No players have been added"
                : 
                <p>
                Player 3 : {games.player3.user.firstName}{games.player3.user.lastName}
                </p>
                }
            </div> */}
        </div>
    )
}
        
export default AddPlayers;
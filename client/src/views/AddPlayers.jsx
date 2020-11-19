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
        Axios.get(`http://localhost:8000/swing/addptog/${playerForm._id}/${props.gameId}/player`+playerNum.playerNum)
            .then(res => console.log(res))
            .then(navigate(`/game/${props.gameId}`))
            // .then(setPlayerNum(playerNum.playerNum + 1))
            .catch(err => console.log(err)) 
    }

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
                <select value={playerNum.playerNum} onChange={handlePlayerNumInput}>
                <option value={1}>Player 1</option>
                <option value={2}>Player 2</option>
                <option value={3}>Player 3</option>
                <option value={4}>Player 4</option>
                <option value={5}>Player 5</option>
                <option value={6}>Player 6</option>
                <option value={7}>Player 7</option>
                <option value={8}>Player 8</option>
                </select>
            <input type="submit" className="btn btn-primary" value="Add Player"></input> 
            </form>
            {
                loaded && 
                <div>
                    {games.player1.user && 
                    <p>Player 1 :{games.player1.user.firstName} {games.player1.user.lastName}</p>}
                    {games.player2.user && 
                        <p>Player 2 :{games.player2.user.firstName} {games.player2.user.lastName}</p> 
                    }
                    {games.player3.user && 
                        <p>Player 3 :{games.player3.user.firstName} {games.player3.user.lastName}</p> 
                    }
                    {games.player4.user && 
                        <p>Player 4 :{games.player4.user.firstName} {games.player4.user.lastName}</p> 
                    }
                    {games.player5.user && 
                        <p>Player 5 :{games.player5.user.firstName} {games.player5.user.lastName}</p> 
                    }
                    {games.player6.user && 
                        <p>Player 6 :{games.player6.user.firstName} {games.player6.user.lastName}</p> 
                    }
                    {games.player7.user && 
                        <p>Player 7 :{games.player7.user.firstName} {games.player7.user.lastName}</p> 
                    }
                    {games.player8.user && 
                        <p>Player 8 :{games.player8.user.firstName} {games.player8.user.lastName}</p> 
                    }
                </div>
            }
            {/* <div>
            {!games.player1.user ? 
                ""
                : 
                <p>
                Player 1 : {games.player1.user.firstName}{games.player1.user.lastName}
                </p>
                }
            </div>
            <div>
            {games.player2.user === undefined ? 
                ""
                : 
                <p>
                Player 2 : {games.player2.user.firstName}{games.player2.user.lastName}
                </p>
                }
            </div>
            <div>
            {games.player3.user === undefined ? 
                "No players have been added"
                : 
                <p>
                Player 3 : {games.player3.user.firstName}{games.player3.user.lastName}
                </p>
                }
            </div>  */}
        </div>
    )
}
        
export default AddPlayers;
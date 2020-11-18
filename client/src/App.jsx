import './App.css';
import LogReg from './views/LogReg';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import NewGame from './views/NewGame';
import Games from './views/Games'
import AddPlayers from './views/AddPlayers';
import User from './views/User';
import Players from './views/Players';
import EditUser from './views/EditUser';


function App() {
  return (
  <div className="App">
  
      <Router>
        <LogReg path="/"/>
        <Main path='/dashboard'/>
        <NewGame path='/newgame'/>
        <Games path='/games'/>
        <AddPlayers path='/game/:gameId'/>
        <User path='/swing/user/:id'/>
        <Players path='/users' />
        <EditUser path='/swing/user/update/:id' />
      </Router>
    </div>
  );
}

export default App;

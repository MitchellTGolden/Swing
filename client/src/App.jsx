import './App.css';
import LogReg from './views/LogReg'
import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main'


function App() {
  return (
    <div className="App">
      <Router>
        <LogReg path="/"/>
        <Main path='/dashboard'/>
      </Router>
    </div>
  );
}

export default App;

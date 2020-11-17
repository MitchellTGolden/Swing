import {useState} from 'react'
import Axios from 'axios';
import { navigate } from '@reach/router';

const LogReg = props => {
    
    const initialReg = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [reg, setReg] = useState(initialReg)
    const [regErrors, setRegErrors] = useState(initialReg);

    const handleRegInput = e => { 
        setReg({
            ...reg,
            [e.target.name]: e.target.value
        })
    }

    const initialLog = {
        email:"",
        password:""
    }

    const [log, setLog] = useState(initialLog)
    const [logErrors, setLogErrors] = useState(initialLog)

    const handleLogInputs = e => {
        setLog({
            ...log,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/register', reg, {withCredentials: true})
            .then(res => {
                if(res.data.msg){
                    navigate('/users')
                }
            })
    }

return(
    <div className="d-flex justify-content-around">

        <form className="col-4" onSubmit={handleRegister}>
            <h2 className="text-center">Register</h2>
            <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input 
                type="text"
                name="firstName"
                className="form-control"
                onChange={handleRegInput}
                value={reg.firstName}
                />
                <span className="text-danger">{regErrors.firstName ? regErrors.firstName.message: ""}
                </span>
                
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input 
                type="text"
                name="lastName"
                className="form-control"
                onChange={handleRegInput}
                value={reg.lastName}
                />
                <span className="text-danger">{regErrors.lastName ? regErrors.lastName.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="">Email:</label>
                <input 
                type="email"
                name="email"
                className="form-control"
                onChange={handleRegInput}
                value={reg.email}
                />
                <span className="text-danger">{regErrors.email ? regErrors.email.message: ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="">Password:</label>
                <input 
                type="password"
                name="password"
                className="form-control"
                onChange={handleRegInput}
                value={reg.password}
                />
                <span className="text-danger">{regErrors.email ? regErrors.email.message: ""}
                </span>
            </div>
                <div className="form-group">
                <label htmlFor="">Confirm Password:</label>
                <input 
                type="password"
                name="confirmPassword"
                className="form-control"
                onChange={handleRegInput}
                value={reg.confirmPassword}
                />
                <span className="text-danger">{regErrors.password ? regErrors.password.message: ""}
                </span>
                <input className="btn btn-warning" type="submit" value="Register"/>
            </div>
        </form>

        
        <form className="col-4">
            <h2 className="text-center">Login</h2>
            <div className="form-group">
                <label htmlFor="">Email:</label>
                <input 
                type="email"
                name="email"
                className="form-control"
                onChange={handleLogInputs}
                value={log.email}
                />
                <span className="text-danger">{logErrors.email ? logErrors.email.message: ""}
                </span>
            </div>
                <div className="form-group">
                <label htmlFor="">Password:</label>
                <input 
                type="password"
                name="password"
                className="form-control"
                onChange={handleLogInputs}
                value={log.password}
                />
                <span className="text-danger">{logErrors.password ? logErrors.password.message: ""}
                </span>
                <input className="btn btn-primary"type="submit" value="Login"/>
            </div>
        </form>
    </div> 

    
)

}

export default LogReg; 
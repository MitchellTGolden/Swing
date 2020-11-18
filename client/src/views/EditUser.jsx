import { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props => {
    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleForm = e => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/swing/user/update/${props.id}`, userForm)
            .then(res => {
                console.log(res);
                if (res.data.results) {
                    navigate(`/swing/user/${props._id}`);
                } else {
                    setErrors(res.data);
                }
            })
    }

    return (
    
    <div className="d-flex justify-content-around p-5" >
            <form className="col-4" onSubmit={handleUpdate}>
                <h2 className="text-center">Update {props.firstName}</h2>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        onChange={handleForm}
                        value={userForm.firstName}
                    />
                    <span className="text-danger">{errors.firstName ? errors.firstName.message : ""}</span>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        onChange={handleForm}
                        value={userForm.lastName}
                    />
                    <span className="text-danger">{errors.lastName ? errors.lastName.message : ""}</span>
                </div>
                <div className="form-group" readonly>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleForm}
                        value={userForm.email}
                    />
                    {/* <span className="text-danger">{errors.email ? errors.email.message : ""}</span> */}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={handleForm}
                        value={userForm.password}
                    />
                    <span className="text-danger">{errors.password ? errors.password.message : ""}</span>
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        onChange={handleForm}
                        value={userForm.confirmPassword}
                    />
                    <span className="text-danger">{errors.confirmPassword ? errors.confirmPassword.message : ""}</span>
                </div>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Edit;
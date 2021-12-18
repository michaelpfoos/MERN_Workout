import React, { useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';

const Register = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register', newUser)
            .then((res) => {
                console.log("User added!")
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            })
    };
    return (
        <div>
            <h1>User Registration</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName"> First Name: </label>
                <input type="text" name="firstName" />
                <br />
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" />
                <br />
                <br />
                <label htmlFor="confirm-pw">Confirm pw: </label>
                <input type="password" name="confirmpw" /><br />
                <br />
                <input type="submit" value="Register!" />
            </form>
        </div>
    )
}
export default Register;
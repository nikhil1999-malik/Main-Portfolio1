import axios from 'axios';
import React, { useState } from 'react'
import "../Components/Header/Header.css"

function Login() {

    const [login, Setlogin] = useState({
        Email: "",
        Password: ""
    })

    const [user, SetUser] = useState({})

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        Setlogin({
            ...login,
            [name]: value
        })
    }

    const Submit = () => {
        axios.get("http://localhost:5000/login",login)
            .then((res) => {
                SetUser(res.data.user)
                alert(res.data.message)
            })
    }


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 text-center mx-auto login">
                        <h1>Login</h1>
                        <form action="post" className="justify-content-center row gy-2">
                            <div className="col-md-10">
                                <input type="email" name="Email" value={login.Email} onChange={handleInput} className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="col-md-10">
                                <input type="password" name="Password" value={login.Password} onChange={handleInput} className="form-control" placeholder="Enter Password" />
                            </div>
                            <button className="btn btn-primary d-grid" onClick={Submit}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login

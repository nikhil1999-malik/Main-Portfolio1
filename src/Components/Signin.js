import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Components/Header/Header.css";






function Signin() {


    const [signuser, Setsignuser] = useState({
        FirstN: "",
        Email: "",
        Password: "",
        CPassword: ""
    })

    let name, value;

    function handleInput(e) {
        name = e.target.name;
        value = e.target.value;

        Setsignuser({
            ...signuser,
            [name]: value
        })
    }

    const Submit=()=> {

        axios.post('http://localhost:5000/signin', signuser)
            .then((res) => {
                alert(res.data.message)
            })
    }

    return (
        <section className="SignIn">
            <div className="container">
                <div className="row">
                    <div className=" SignBox col-lg-8 mx-auto text-center">
                        <h1 className="m-3">Sign In</h1>
                        <form action="post" className="row g-2 justify-content-center">
                            <div className="col-md-5">
                            <input value={signuser.FirstN} name="FirstN" onChange={handleInput} type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="col-md-5">
                                <input type="text" name="Email" value={signuser.Email} onChange={handleInput} className="form-control" placeholder="Enter Email" required />
                            </div>
                            <div className="col-md-10">
                                <input type="password" name="Password" value={signuser.Password} onChange={handleInput} className="form-control" placeholder=" Enter Password" required />
                            </div>
                            <div className="col-md-10">
                                <input type="password" name="CPassword" value={signuser.CPassword} onChange={handleInput} className="form-control" required placeholder="Confirm Password" />
                            </div>
                            <div className="col-md-10 d-grid">
                                <button className="btn btn-primary" onClick={Submit}>SignIn</button>
                            </div>
                            <div className="col-md-10 Forgot d-flex">
                                <Link className="Link" to="/login">Already an account?</Link>
                                <h5>Forgot password?</h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Signin

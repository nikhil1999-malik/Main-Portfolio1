import axios from 'axios';
import React, { useState } from 'react'

function Contact() {

    const [user, SetUser] = useState({
        fname: "",
        sname: "",
        subject: "",
        message: ""
    });

    let name, value;

    function handleInput(e) {
        name = e.target.name;
        value = e.target.value;

        SetUser({
            ...user,
            [name]: value
        })
    }

    const Submit = () => {
        axios.post('http://localhost:5000/Dcontact', user)
            .then((res) => {
                alert(res.data.message)
            })
    }


    return (
        <section id="blog">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">CONTACT</h6>
                        <h1>Get In Touch</h1>
                        <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, nemo aperiam sequi aspernatur mollitia suscipit saepe exercitationem nobis modi! Maiores accusamus magnam necessitatibus debitis earum voluptatum quaerat aliquid, deleniti repellendus!</p>
                    </div>
                </div>
                <form action="post" className="row g-2 justify-content-center">
                    <div className="col-md-5">
                        <input value={user.fname} name="fname" onChange={handleInput} type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="col-md-5">
                        <input value={user.sname} name="sname" onChange={handleInput} type="text" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="col-md-10">
                        <input value={user.subject} name="subject" onChange={handleInput} type="text" className="form-control" placeholder="Enter Subject" />
                    </div>
                    <div className="col-md-10">
                        <textarea value={user.message} name="message" onChange={handleInput} id="" cols="30" rows="5" className="form-control" />
                    </div>
                    <div className="col-md-10 d-grid">
                        <button onClick={Submit} className="btn btn-primary">Contact</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

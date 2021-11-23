import "../Pages/Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link active"  to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"to="/services" >Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" >Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" >PortFolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" >Team</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" >Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" >Contact</Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary ml-3">Join Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

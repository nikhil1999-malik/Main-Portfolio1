
import "../Header/Header.css";
import { Link } from "react-router-dom";
import React from 'react'
import Section1 from "../Main2/Section1";

function Header() {
    return (
        <>
            <div class="hero vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="col-lg-7 mx-auto">
                        <h1 className="display-4 text-white">Build robust landing pages now</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus dolor cumque impedit fugiat nesciunt mollitia rerum quo laudantium voluptas facere dolorum quia aperiam, officia ipsum eligendi incidunt? Fugiat, atque!</p>
                        <div className="Buttons">
                            <Link to="/" className="btn btn-primary">Get Now</Link>
                            <Link to="/" className="btn btn-outline-light">My PortFolio</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Section1/>
        </>

    )
}

export default Header



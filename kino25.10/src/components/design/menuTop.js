import React from "react";
import {Link} from "react-router-dom";

export  default class MenuTop extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
                <div className="container">
                    <Link to="/"className="navbar-brand" >Places</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#probootstrap-menu" aria-controls="probootstrap-menu" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span><i className="ion-navicon"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="probootstrap-menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/album">Album</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
import React from 'react';
import {Link} from "react-router-dom";

const Navigation = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Application</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link to="/home" className="nav-item nav-link">
                        home
                    </Link>
                    <Link to="/home" className="nav-item nav-link">
                        <form>
                            <i onClick={props.signoutFn} className="fas fa-sign-out-alt"></i>
                        </form>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
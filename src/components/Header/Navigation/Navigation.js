import React from 'react';
import {Link , Switch , Route} from "react-router-dom";
import './Navigation.scss'


const Navigation = props => {
    return(
        <nav className="custom-nav navbar navbar-expand-lg bg-light navbar-light">
            {props.isLogged !== null ? (
                <div>
                    <a className="navbar-brand" href="#">React Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to="/home" className="nav-item nav-link">
                                Home
                            </Link>
                            <Link to="/ajouter" className="nav-item nav-link">
                                Ajouter
                            </Link>
                            <Link to="/login" className="nav-item nav-link">
                                <form>
                                    <i onClick={props.signoutFn} className="fas fa-sign-out-alt"></i>
                                </form>
                            </Link>
                        </ul>
                    </div>
                </div>

            ) : (
                ""
            )}


        </nav>
    )
};

export default Navigation;


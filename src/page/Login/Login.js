import React from 'react'
import {UserConsumer} from "../../providers/UserContext";
import fire from '../../fire'
import "./Login.scss"

class Login extends React.Component{


    render(){
        return(
            <UserConsumer>
                {({loginFn , signupFn, changeHandlerFn})=>{
                    return(
                        <div className="container login">

                            <div className="row">
                                <div className="box col-md-12">
                                    <span className="shadow"></span>
                                    <h1 className=" loginTitle">
                                        Application Gym
                                    </h1>
                                    <i className="fas fa-dice-d20 fa-4x "></i>
                                </div>

                            </div>
                            <div className="row wrapper">

                                <form className="col-sm-12 custom-form">
                                    <div className="form-group">

                                        <input  onChange={changeHandlerFn} type="email" name="email"
                                                className="form-control" id="input2" aria-describedby="emailHelp"
                                                placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <input  onChange={changeHandlerFn} type="password" name="password"
                                               className="form-control input" id="exampleInputPassword1"  placeholder="Password"/>
                                        <span className="underline"></span>
                                    </div>

                                    <button type="submit" onClick={loginFn} className="button ">Se Connecter</button>

                                    <button onClick={signupFn}  className=" login spacing button signin">S'enregistrer
                                    </button>
                                </form>
                            </div>

                        </div>
                    )
                }}

            </UserConsumer>
        )
    }

}

export default Login
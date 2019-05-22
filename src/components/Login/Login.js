import React from 'react'
import {UserConsumer} from "../../providers/UserContext";
import fire from '../../fire'
import "./Login.scss"

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password : ""
        }
    }
    handleChange = e => {
      this.setState({[e.target.name] : e.target.value })  ;
};

    signup = e => {
        e.preventDefault();

        fire.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

        }).catch((error)=>{
            console.log(error)
        })
    };

    login = e =>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }

    state = {
        email : "",
        password : "",
        user : {}
    };

    render(){
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

                            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email"
                                   className="form-control" id="input2" aria-describedby="emailHelp"
                                   placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                                   className="form-control input" id="exampleInputPassword1"  placeholder="Password"/>
                                   <span className="underline"></span>
                        </div>

                        <button type="submit" onClick={this.login} className="button ">Se Connecter</button>

                        <button onClick={this.signup}  className=" login spacing button signin">S'enregistrer
                        </button>
                    </form>
                </div>

            </div>
        )
    }

}

export default Login
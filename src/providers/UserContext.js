import React from 'react';
import fire from "../fire";

const {Provider , Consumer } = React.createContext();

class UserProvider extends React.Component{

    state = {
        users : [],
        input : "",
        user : null,
        email: "",
        password : ""
    };

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value })  ;
    };

    signup = e => {
        e.preventDefault();
        fire.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

        }).catch((error)=>{
            console.log(error)
        });
    };

    login = e =>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
        });
    };




    render(){
        return(
            <Provider value = {{
                user : null,
                changeHandlerFn : this.handleChange,
                signupFn : this.signup,
                loginFn: this.login,
                currentUser : this.state.user
            }} >
                {this.props.children}
            </Provider>
        )
    }

}

export {UserProvider  , Consumer as UserConsumer}
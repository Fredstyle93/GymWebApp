import React from 'react';
import './App.css';
import "firebase/auth";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import {UserProvider, UserConsumer} from "./providers/UserContext";
import fire from "./fire";
import { Route , Switch , Redirect } from "react-router-dom";
import Ajouter from "./components/Ajouter/Ajouter";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation"


class App extends React.Component {
  constructor(props){
      super(props);
    this.state = ({
      user : null
    });
    this.authListener = this.authListener.bind(this);
  }
    componentDidMount() {
        this.authListener();

    }


    addUser = e => {
      e.preventDefault();

  };

    authListener = () => {
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
                localStorage.setItem('user',user.uid)
            }else{
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        })
    };

  signout = () => {
    fire.auth().signOut();
  };

    componentDidMount() {
      this.authListener();

      console.log(this.state.user)
    }



  render() {
    return (
      <div className="App">
        <Navigation
            isLogged = {this.state.user}
            signoutFn = {this.signout}
        />
        <UserProvider>
            {this.state.user !== null ? (

                <Switch>
                  <Route path="/home" render={()=> <Home/>} />
                  <Route path="/ajouter" render={()=> <Ajouter/>} />
                  <Redirect from="/" to="home"/>
              </Switch>

                ) : (
                    <Switch>
                      <Route path="/login" component={Login} />
                      <Redirect from="/" to="login"/>
                    </Switch>
                    )
            }
        </UserProvider>

      </div>
    );
  }
}

export default App;

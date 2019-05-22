import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import "firebase/auth";
<<<<<<< HEAD
import Home from "./components/Login/Login";
import Login from "./components/Home/Home";
=======
import Home from "./components/Login/Home";
import Login from "./components/Home/Login";
>>>>>>> 420133b94223c21da9d66a0df72775484a503163
import {UserProvider, UserConsumer} from "./providers/UserContext";
import fire from "./fire";



class App extends React.Component {
  constructor(props){
      super(props);
    this.state = ({
      user : null
    });
    this.authListener = this.authListener.bind(this);
  }


    addUser = e => {
      e.preventDefault();

  };

    componentDidMount() {
      this.authListener();
    }

    authListener = () => {
      fire.auth().onAuthStateChanged((user)=>{
        console.log(user)
        if(user){
          this.setState({user});
          localStorage.setItem('user',user.uid)
        }else{
          this.setState({ user: null });
          localStorage.removeItem('user');
        }
      })
    };

  render() {
    return (
      <div className="App">
        <UserProvider>
          {this.state.user ? (<Home/>) : (<Login/>)}
        </UserProvider>

      </div>
    );
  }
}

export default App;

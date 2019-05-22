import React from 'react';
import './App.css';
import firebase from "firebase";
import "firebase/auth";
import Home from "./components/Login/Login";
import Login from "./components/Home/Home";
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

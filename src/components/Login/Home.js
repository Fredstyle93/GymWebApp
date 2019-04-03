import React from 'react'
import fire from '../../fire'
import "./Home.css"
import Header from "../Exercice/Header/Header";


class Home extends React.Component{
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this);

        this.state = {

        }
    }

    signout = () => {
    fire.auth().signOut();
    };

    render(){
        return(
            <div>
                <Header signoutFn = {this.signout}/>

            </div>
        )
    }

};

export default Home;
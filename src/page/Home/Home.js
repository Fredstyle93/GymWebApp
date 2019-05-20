import React from 'react'
import fire from '../../fire'
import "./Home.css"
import Header from '../../components/Header/Header'



class Home extends React.Component{

    componentDidMount() {

        const exercices = fire.database().ref('/exercices').once('value').then(function (snapshot) {
            console.log(snapshot)
        });

    }

    state = {

    }

    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }

};

export default Home;
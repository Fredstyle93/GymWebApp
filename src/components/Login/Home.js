import React from 'react'
import fire from '../../fire'


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
                <form>
                    <i onClick={this.signout} className="fas fa-sign-out-alt"></i>
                </form>
            </div>
        )
    }

};

export default Home;
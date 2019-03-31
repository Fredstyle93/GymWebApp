import React from 'react';

const {Provider , Consumer } = React.createContext();

class UserProvider extends React.Component{

    state = {
        users : [],
        input : ""
    };

    addUserFn = e => {
        e.preventDefault();
        console.log('Okk');
    };

    changeHandlerFn = e => {
        this.setState({input : e.target.value});

        console.log(this.state.input)
};

    render(){
        return(
            <Provider value = {{
                users : this.state.users,
                addUserFn : this.addUserFn,
                changeHandlerFn : this.changeHandlerFn
            }} >
                {this.props.children}
            </Provider>
        )
    }

}

export {UserProvider  , Consumer as UserConsumer}
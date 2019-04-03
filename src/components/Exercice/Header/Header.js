import React from 'react';
import Navigation from "./Navigation/Navigation";
import SousMenu from './SousMenu/SousMenu';

const Header = props => {
    return(
            <header>
                <Navigation signoutFn = {props.signoutFn}/>
                <SousMenu/>
            </header>
    );
};
    export default Header;
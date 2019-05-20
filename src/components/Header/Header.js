import React from 'react';
import Navigation from "./Navigation/Navigation";
import SousMenu from './SousMenu/SousMenu';
import Review from "./Review/Review";
import QuickTraining from "./QuickTraining/QuickTraining";



const Header = props => {
    return(
            <header>
                <SousMenu/>
                <QuickTraining/>
            </header>
    );
};
    export default Header;
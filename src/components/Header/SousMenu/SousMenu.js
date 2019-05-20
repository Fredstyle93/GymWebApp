import React from 'react'
import './SousMenu.scss'
import Review from "../Review/Review";

class SousMenu extends React.Component{

    date = () => {
        const moment = require('moment');
       const today = moment().weekday();
       const day =  ["Lundi" , "Mardi" , "Mercredi" , "Jeudi", "Vendredi", "Samedi", "Dimanche"]
        return day[today-1]



    };

    render(){
        return(
            <div>
                <div className="today">
                    {this.date()}
                </div>
                <section>
                    <Review/>
                </section>


            </div>
        )

    }

}

export default SousMenu
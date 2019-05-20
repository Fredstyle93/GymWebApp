import React from 'react';
import fire from '../../fire'

class Ajouter extends React.Component {

    state = {
        nom:""
    };

    ajouterFn = (e , nom , categorie) => {

        nom =this.state.nom;
        categorie = "dos";
        e.preventDefault();
        fire.database().ref('/Exercices').push({
            nom,
            categorie
        }).then((data)=>{
            //Successs
            console.log(data)
        }).catch(error=>{
            console.log(error)
        })
    };

    onChangeFn = (e,value) => {
        console.log(value);
        this.setState({
            [value] : e.target.value
        })
    };

    render(){
        return(
            <div className="container">
                <form onSubmit={this.ajouterFn}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nom de l'exercice</label>
                        <input onChange={(e) => this.onChangeFn(e,'nom')} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Nom"/>
                    </div>
                    {/*
                      <select onChange={props.onChangeFn} className="form-control" value={props.value}>
                        {props.selectValues.map(item => (
                            <option key={item.value} value={item.value}>{item.text}</option>
                        ))}
                    </select>
                    */}

                    <select className="form-control">
                        <option>Biceps</option>
                        <option>Triceps</option>
                        <option>Dos</option>
                        <option>Abdominaux</option>
                        <option>Jambes</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default Ajouter;
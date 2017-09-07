import React, { Component } from 'react';

import $ from 'jquery'

class IngredientList extends Component {
    constructor(props){
        super(props);
        this.displayIngredients = this.displayIngredients.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
    }
    displayIngredients(){
        let resultsArray = [];
        this.props.recipie.ingredients.map((item, i) => {
            resultsArray.push(<li className="ingredient" key={i}>{item.quantity+" "+item.product+" "}<a>delete</a></li>);
        });
        return resultsArray;
    }
    
    deleteIngredient(){
        
    }

    render() {
        return (
            <ul>
                {this.displayIngredients()}
                
            </ul>
            );
        }
    }

export default IngredientList;

import React, { Component } from 'react';

class IngredientList extends Component {
    constructor(props){
        super(props);
        this.displayIngredients = this.displayIngredients.bind(this);
    }
    displayIngredients(){
        let resultsArray = [];
        this.props.recipie.ingredients.map((item, i) => {
            resultsArray.push(<li key={i}>{item.quantity+" "+item.product}</li>);
        });
        return resultsArray;
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

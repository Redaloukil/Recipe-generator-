import React, { Component } from 'react';


class Ingredient extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.addIngredientList = this.addIngredientList.bind(this)
    }
    // add new Ingredient in ingredients list
    addIngredientList(){
        if(this.quantity.value ==="" || this.product.value ===""){
            return 0;
        }
        this.props.addIngredient(this.quantity.value , this.product.value);
        this.quantity.value = "";
		this.product.value = "";
    }

    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                    <label htmlFor="exampleInputName2">Quantity</label>
                    <input  id="quantity"
                            ref={(input)=>{this.quantity = input}}
                            type="text"
                            className="form-control"
                            placeholder="enter the quantity"/>
                </div>
                <div className="form-inline form-group">
                    <label htmlFor="exampleInputEmail2">ingredient</label>
                    <input  id="ingredient"
                            ref={(input)=>{this.product = input}}
                            type="text"
                            className="form-control"
                            placeholder="enter the product"/>
                </div>
                <input className="btn btn-info" text="add" type="button" onClick={this.addIngredientList} placeholder="add"/>

            </div>


        );
    }
}

export default Ingredient;

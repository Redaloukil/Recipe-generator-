import React, { Component } from 'react';
import Ingredient from './ingredient'
import IngredientList from './ingredient-list';


class Recipee extends Component {
    constructor(props){
        super(props);
        this.state={
            newRecipee:{
                name :"name",
                description : "description",
                ingredients : [],
            }
        };
        this.submitRecipee = this.submitRecipee.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
    }

    submitRecipee(){
        let name = this.name.value;
        let description = this.description;
        let ingredients = this.state.ingredients;
        let recipee = {
            name,
            description,
        }
        this.state.newRecipee.name = recipee.name;
        this.state.newRecipee.description = recipee.description;
        this.setState({newRecipee:this.state.newRecipee,})
        console.log(this.state.newRecipee   );
    }

    addIngredient(quantity, product) {
  		let newRecipie = this.state.newRecipee;
  		newRecipie.ingredients.push({quantity: quantity, product: product});
  		this.setState({newRecipie: newRecipie});
  		console.log(this.state.newRecipee)
	}

    render(){
        return(
            <div>
                <h1 className="h3">Hello Recipee</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non quisquam veniam quas! Doloremque reprehenderit deserunt, iste ea voluptas earum velit corrupti placeat, nostrum atque rem nam id, cum in?</p>
                <br/>
                <form>
                    <div className="form-group">
                        <label>Recipee Name</label>
                        <input  type="text"
                                className="form-control"
                                id="name"
                                ref={(input)=>{this.name = input}}
                                placeholder="Enter the name of the recipee"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Recipee</label><br/>
                        <textarea   className="form-control"
                                    id="description"
                                    ref={(input)=>{this.description = input}}
                                    rows="5"></textarea>
                        <p className="help-block">Example block-level help text here.</p>
                    </div>
                    <IngredientList recipie={this.state.newRecipee}/>
                    <br/>
                    <Ingredient addIngredient={this.addIngredient.bind(this)}/>
                    <br/>
                    </form>
                <button className="btn btn-info" onClick={this.submitRecipee}>Add Recipee</button>
              
            </div>
        );
    }
}

export default Recipee;

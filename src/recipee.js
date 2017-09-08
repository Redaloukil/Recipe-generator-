import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import request from 'superagent'

import Ingredient from './ingredient'
import IngredientList from './ingredient-list';




class Recipee extends Component {
    constructor(props){
        super(props);
        this.state={
            recipies:JSON.parse(localStorage.getItem('recipies')) || [],
            newRecipee:{
                name :"name",
                description : "description",
                ingredients : [],
            }
        };
        this.submitRecipee = this.submitRecipee.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
    }

    submitRecipee(){
            let name = this.name.value;
            let description = this.description.value;
            let newRecipee = {
                
                name : name,
                description :description,
                ingredients:[],
            }
            this.state.newRecipee.name = newRecipee.name;
            this.state.newRecipee.description = newRecipee.description;
            this.setState({newRecipee})
            this.state.recipies.push(newRecipee);
            this.setState({recipies:this.state.recipies});
            localStorage.setItem('recipies' ,JSON.stringify(this.state.recipies));
            this.name.value ="";
            this.description.value ="";
        
        
    }

    addIngredient(quantity, product) {
  		let newRecipie = this.state.newRecipee;
  		newRecipie.ingredients.push({quantity: quantity, product: product});
  		this.setState({newRecipie});
    }
    onImageDrop(){

    }
    
    render(){
        return(
            <div>
                <h1 className="h3">Hello Recipee</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non quisquam veniam quas! Doloremque reprehenderit deserunt, iste ea voluptas earum velit corrupti placeat, nostrum atque rem nam id, cum in?</p>
                <br/>
                <form>
                <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
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
                                    rows="5"
                                    placeholder="Enter the description of the recipee"></textarea>
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

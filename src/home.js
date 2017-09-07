import React, { Component } from 'react';


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            recipies:JSON.parse(localStorage.getItem('recipies')) || [],
        }
        
        this.displayRecipies = this.displayRecipies.bind(this);
    }
    displayRecipies(){
        let displayArr = [];    
        this.state.recipies.map(function(item,i){
            displayArr.push(<li>{item.name +" "+item.description}</li>)
        })
        return displayArr;
    }
    render(){
        return(
            <div>
                <h1 className="h3">This is our available Recipees</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem aspernatur soluta temporibus ipsa quo, reiciendis, nulla perspiciatis sint voluptate, perferendis molestias commodi sit aliquam. Quasi repellat autem corrupti nisi.</p>
                {this.displayRecipies()}
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import './App.css';
import {ImyTodo} from './App'


interface IAddItemComponentState {
  newItemTodo: string;
}

interface IAddItemComponentProps {
  addNewItem(item: ImyTodo): void;
}



class AddItemComponent extends Component<IAddItemComponentProps, IAddItemComponentState> {

  constructor(props: any) {
    super(props);

    this.state = {
      newItemTodo: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.updateInputValueInState = this.updateInputValueInState.bind(this)
  }

  handleClick(){
    //alert('you clicked me!')

    this.props.addNewItem({ 
      todo: this.state.newItemTodo, complete: false,
    });
    
  }


  updateInputValueInState(e: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      newItemTodo: e.target.value
    })
  }



  render() {

    return (
      <div className="App">
       <input type = "text" placeholder = "Enter todo..." onChange ={this.updateInputValueInState} />
        <button className="btn btn-warning" type ="submit" onClick ={this.handleClick} >Add</button> 
      </div>
    );
  }
  }
  

export default AddItemComponent;

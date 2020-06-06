import React, { Component } from 'react';
import './App.css';
import ListComponent from './ListComponent';
import AddItemComponent from './AddItemComponent'


export interface ImyTodo {
  todo: string; 
  complete: boolean
} 

interface IAppState {
  myList: ImyTodo[];
} 

class App extends Component<{}, IAppState> {

  constructor(props: any) {
    super(props);

    this.state ={
        myList: [ 
        {todo: 'Go to the gym', complete: false},
        {todo: 'cook', complete: false},
        {todo: 'study', complete: false}
      ],           
    }
    
    this.toggle = this.toggle.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  toggle =(i: number)=>{
      let todoList = this.state.myList

      // Toggle the complete between true/false
      todoList[i].complete = !todoList[i].complete;

      this.setState({
        myList: todoList
      })
  }

  //input text
  addItem =(newItem: ImyTodo) => {
    this.setState({
      myList: [...this.state.myList, newItem]
    })
  }

  render() {
    return (
      <div className="App">
        <header className ="App-header">
      <AddItemComponent addNewItem ={this.addItem}/>  
      <ListComponent someList= {this.state.myList} showComplete = {this.toggle}/>
        </header>
      </div>
    );
  }
  }
export default App;

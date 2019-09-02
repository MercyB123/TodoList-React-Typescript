import React, { Component } from 'react';
import './App.css';
import { ImyTodo } from './App';


 interface IListProps {
  someList: ImyTodo[];
  showComplete(i:number): void;
}

class ListComponent extends Component<IListProps, {}> {

  constructor(props: any) {
    super(props);

    
  }

  handleChange(i: number){
   // alert("Du klickade på: " + i);
    this.props.showComplete(i)
  }

  inputUpdate(){
    
  }

  render() {

    let myTodoList: JSX.Element[]  = [];
    
    for(let i = 0; i < this.props.someList.length; i++){
      
      myTodoList.push((
      <li key ={i} className={this.props.someList[i].complete ? 'done' : ''} onClick={this.handleChange.bind(this, i)}>
        <input type= "checkbox" checked={this.props.someList[i].complete} />
        {this.props.someList[i].todo}
        </li>))
       
    }

    

    return (
      <div className="App">
        <header className ="App-header" >
        <ul>
         {myTodoList}
        </ul>
        </header>
      </div>
    );
  }
  }
  

export default ListComponent;

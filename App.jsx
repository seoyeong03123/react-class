// import React, { Component } from 'react';
// // import MyName from './MyName';
// // import Student from './Student';
// // import Peo from './Peo';
// // import Counter from './Counter';
// import TodoItem from './TodoItem';

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       items:[],
//       value:""
//     }

//     // const value = prompt("초기값입력", "");
//     // this.state = {
//     //   defaultNum: value
//     // }
//   }

//   onClickAdd = e=>{
//     const items = this.state.items;
//     items.push(this.state.value);
//     this.setState({
//       items
//     })
//   }

//   onChange = e =>{
//     this.setState({value: e.target.value})
//   }

//   render() {
//     return (
//       <>
//       <input type="text" onChange={this.onChange}/>
//       <button onClick={this.onClickAdd}>추가</button>
//       {this.state.items.map(()=>{
//         return <TodoIte0 key={idx} value={value}/>
//       })}
//       </>
//     );
//     // <Counter number={this.state.defaultNum}/>;
//       // <MyName name="박서영" />//MyName의 부모 = App
//       // <Student name="박서영" club="IWOP" age="17"/>
      
    
//   }
// }

// export default App;



import React from "react";
import TodoItem from "./TodoItem";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
      <div className="content">
        <h1>TodoList</h1>
        <input className="text" type="text" onChange={this.onChange} />
        <div className="btn"><button onClick={this.onClickAdd}>추가</button></div>
        {this.state.items.map((value, idx) => (
          <TodoItem key={idx} value={value} />
        ))}
        </div>
      </>
    );
  }
}
export default App;
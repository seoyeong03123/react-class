// import React from 'react';


// class TodoItem extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div>
//                 <input type="text"/>
//                 <button>클릭</button>
//             </div>
//         )
//     }
// }

// import React from "react";

// class TodoItem extends React.Component{

//     render(){
//         return(
//             <div className="content">
//                 <div>해야할일</div>
//         <span>{this.onChande}</span>
//                 <button>수정</button>
//                 <button>삭제</button>
//             </div>
//         )
//     }
// }

// export default TodoItem;

import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteThis(idx){
    this.item.splice(idx,1);
  }

  render() {
    return (
      <div className="box">
        <span>{this.props.value}</span>
        <div>
        <button onClick="deleteThis(idx)">수정</button>
        <button onClick="deleteThis(idx)">삭제</button>
      </div>
      </div>
      
    );
  }
}

export default TodoItem;
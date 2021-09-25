import React from "react";

// export default class User extends React.Component {
//   state = {
//     count: 0,
//   };

//   btnClick = ()=> {

// ! Такая запись не самая лучшая
//* this.setState({count:this.state.count + 1})

// ! предпочтительнее такая запись
//   this.setState(state=>({count:state.count+1}))
// }

// render() {
//   const styles = {
//     btn: {
//       cursor: "pointer",
//     },
//     h3:{
//       color:'red'
//     }
//   };

//! Лучше отимизировать и записать в следующем виде:
//? const {name,age} = this.props;
//? const {count} = this.state;
//* <div>
//*   <p>{name}</p>
//*   <p>{age}</p>
//*   <p>{count}</p>
//* </div>

//     return (
//       <div>
//         <h2>{this.props.name}</h2>
//         <h2>{this.props.age}</h2>
//         <h3 style = {styles.h3}>{this.state.count}</h3>
//         <button style={styles.btn} onClick = {this.btnClick}>CLICK ME</button>
//       </div>
//     );
//   }
// }

//!  Тренировочный!!!
export default class User extends React.Component {
  state = {
    count: 0,
  };
  btnClick = () => {
    this.setState((state) => ({ count: ++state.count }));
  };

  render() {
    const styles = {
      btn: {
        cursor: "pointer",
      },
      counter: {
        color: "red",
      },
      hr:{
        width:'400px'
      }
    };
    const { name, age } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h2> My name is {name}</h2>
        <h3> i am {age} years old</h3>
        <hr style={styles.hr}/>
        <h3 style={styles.counter}> This button was pressed: {count} times</h3>
        <button style={styles.btn} onClick={() => this.btnClick()}>
          CLICK ME
        </button>
        <hr style={styles.hr}/>
      </div>
    );
  }
}


import React from "react";

// export default class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.tID = setInterval(() => this.tick(), 1000);
//   }

//   tick() {
//     this.setState({ date: new Date() });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

//!  Тренировочный

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Can you tell me what time is it?</h2>
        <h3>It is: {this.state.date.toLocaleTimeString()} o'clock</h3>
      </div>
    );
  }
}

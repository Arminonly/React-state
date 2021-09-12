import "./App.css";
import User from "./User/user";
import Clock from "./Clock/clock";

function App() {
  return (
    <div className="App">
      <h1>react state</h1>
      <User name="Alex" age={25} />
      <Clock />
    </div>
  );
}

export default App;

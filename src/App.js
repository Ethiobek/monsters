import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bereket Zergaw",
      age: 12,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I'm <code>{this.state.name}</code>. I am {this.state.age} years old
            !
          </p>
          <button
            onClick={() => {
              this.setState({ name: "Btnu" });
            }}
          >
            Learn React
          </button>
        </header>
      </div>
    );
  }
}

export default App;

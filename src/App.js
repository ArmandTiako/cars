import React from "react";
import "./App.css";
import Mycars from "./components/Mycars";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Mycars />
      </div>
    );
  }
}

export default App;

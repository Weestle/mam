import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const screenWidtg = document.documentElement.clientWidth;
const screenHeigth = document.documentElement.clientHeight;

console.log(screenHeigth)
console.log(screenWidtg)

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      stripBg: "white",
    };
  }
  render() {
    const style = { backgroundColor: this.state.stripBg };
    return (
      <button
        className="square"
        onClick={() => {
          if (this.state.stripBg === "white") {
            this.setState({ stripBg: "black" });
          } else {
            this.setState({ stripBg: "white" });
          }
        }}
        style={style}
      ></button>
    );
  }
}

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    let zxc = [[]];
    let idx = 0;
    const grid = [];
    for (let i = 0; i < screenHeigth / 400; i++) {
      const array_i = [];
      for (let j = 0; j < screenWidtg / 400 - 1; j++) {
        array_i.push(<Square value={this.state.squares[i]} />);
      }
      grid.push(array_i);
    }
    return (
      <div className="grid">
        {grid.map((row, rowID) => {
          return row.map((node, nodeID) => {
            return <Square className="square" value={this.state.squares[1]} />;
          });
        })}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="display">
        <Field />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

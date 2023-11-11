import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
      name: this.props.name,
      lists: [],
      darkMode: false,
    };
    this.date = "22/8/2022";
    this.getTime = this.getTime.bind(this);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello, world! {this.state.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id="seconds">It is {this.state.seconds.created}</h2>
        <h3>Is is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && (
          <input value={this.state.darkMode} type="text" />
        )}
      </div>
    );
  }
}

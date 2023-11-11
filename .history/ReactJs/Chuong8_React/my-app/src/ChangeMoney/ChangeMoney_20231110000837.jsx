import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const scaleNames = {
  dollar: "dollar",
  vnd: "Fahrenheit",
};

const todollar = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
};

const toFahrenheit = (dollar) => {
  return dollar * 1.8 + 32;
};

const tryConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  let output = convertFunc(input);
  output = Math.round(output * 1000) / 1000;
  return String(output);
};

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      scale: "d",
    };
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale,
    });
  };

  render() {
    // Destructuring
    const { scale, temperature } = this.state;
    const dollar =
      scale === "f" ? tryConvert(temperature, todollar) : temperature;
    const fahrenheit =
      scale === "d" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          title={scaleNames.d}
          temperature={dollar}
          onTemperatureChange={this.handleChange("d")}
        />
        <TemperatureInput
          title={scaleNames.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange("f")}
        />
        <BoilingVerdict dollar={Number(dollar)} />
      </div>
    );
  }
}

export default Calculator;

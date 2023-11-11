import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const scaleNames = {
  dollar: "dollar",
  vnd: "VND",
};

const toDollar = (VND) => {
  return (VND - 32) / 1.8;
};

const toVND = (dollar) => {
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
      scale: "c",
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
      scale === "f" ? tryConvert(temperature, toDollar) : temperature;
    const VND =
      scale === "c" ? tryConvert(temperature, toVND) : temperature;

    return (
      <div>
        <TemperatureInput
          title={scaleNames.c}
          temperature={dollar}
          onTemperatureChange={this.handleChange("c")}
        />
        <TemperatureInput
          title={scaleNames.f}
          temperature={VND}
          onTemperatureChange={this.handleChange("vn")}
        />
        <BoilingVerdict dollar={Number(dollar)} />
      </div>
    );
  }
}

export default Calculator;

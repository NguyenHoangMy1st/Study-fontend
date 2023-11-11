import React, { Component } from "react";
// import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const scaleNames = {
  dollar: "Dollar",
  vnd: "VND",
};

const toDollar = (VND) => {
  return VND / 24350;
};

const toVND = (dollar) => {
  return dollar * 24350;
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
      scale: "do",
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
      scale === "dong" ? tryConvert(temperature, toDollar) : temperature;
    const VND = scale === "do" ? tryConvert(temperature, toVND) : temperature;

    return (
      <div>
        <TemperatureInput
          title={scaleNames.d}
          temperature={dollar}
          onTemperatureChange={this.handleChange("dollar")}
        />
        <TemperatureInput
          title={scaleNames.vnd}
          temperature={VND}
          onTemperatureChange={this.handleChange("vnd")}
        />
        {/* <BoilingVerdict dollar={Number(dollar)} /> */}
      </div>
    );
  }
}

export default Calculator;

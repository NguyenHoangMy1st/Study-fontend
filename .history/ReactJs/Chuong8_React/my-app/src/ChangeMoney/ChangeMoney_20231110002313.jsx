import React, { Component } from "react";
// import BoilingVerdict from "./BoilingVerdict";
import DenominationsInput from "./DenominationsInput";

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

const tryConvert = (denominations, convertFunc) => {
  const input = parseFloat(denominations);
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
      denominations: "",
      scale: "do",
    };
  }

  handleChange = (scale) => (value) => {
    this.setState({
      denominations: value,
      scale,
    });
  };

  render() {
    // Destructuring
    const { scale, denominations } = this.state;
    const dollar =
      scale === "dong" ? tryConvert(denominations, toDollar) : denominations;
    const VND = scale === "do" ? tryConvert(denominations, toVND) : denominations;

    return (
      <div>
        <denominationsInput
          title={scaleNames.dollar}
          denominations={dollar}
          ondenominationsChange={this.handleChange("do")}
        />
        <denominationsInput
          title={scaleNames.vnd}
          temperature={VND}
          onTemperatureChange={this.handleChange("dong")}
        />
        {/* <BoilingVerdict dollar={Number(dollar)} /> */}
      </div>
    );
  }
}

export default Calculator;

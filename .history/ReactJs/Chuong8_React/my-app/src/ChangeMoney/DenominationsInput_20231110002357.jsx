import React, { Component } from "react";
import PropTypes from "prop-types";

export class DenominationsInput extends Component {
  handleChange = (event) => {
    this.props.onDenominationsChange(event.target.value);
  };
  render() {
    const { title, denominations } = this.props;
    return (
      <fieldset>
        <legend>Enter denominations in {title}</legend>
        <input value={Denominations} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

DenominationsInput.propTypes = {
  onDenominationsChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  Denominations: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DenominationsInput;

import React from "react";
import PropTypes from "prop-types";

const spanStyle = {
	color: "red",
	fontSize: 1.5 + "em"
}

const InlineError = ({ text }) => (
	<span style={spanStyle}>{ text }</span>
);

InlineError.PropTypes = {
	text: PropTypes.string.isRequired
};

export default InlineError;
import React from "react";

import PropTypes from "prop-types";

const divStyle = {
  marginBottom: "20px"
};
const inputStyle = {
  borderRadius: "2px",
  outline: "none",
  border: "1px solid #333",
  padding: "5px"
};

const UserInput = ({ value, handleInput }) => {
  return (
    <div className="user__input" style={divStyle}>
      <input
        style={inputStyle}
        value={value}
        onChange={event => handleInput(event.target.value)}
      />
    </div>
  );
};

UserInput.PropTypes = {
  value: PropTypes.string,
  handleInput: PropTypes.func
};

export default UserInput;

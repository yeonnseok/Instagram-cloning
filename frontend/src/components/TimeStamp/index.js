import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TimeStamp = (props, context) => (
 
     <span className="time">{props.time}</span>

);


TimeStamp.propTypes = {
    time: PropTypes.string.isRequired,
};

TimeStamp.contextTypes = {
    t: PropTypes.func.isRequired,
};

export default TimeStamp;
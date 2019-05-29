import React from "react";

const Person = props => (
  <span>
    <a
      href={props.link}
      className="FusionLinks"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>{" "}
    – {props.job}{" "}
  </span>
);

export default Person;

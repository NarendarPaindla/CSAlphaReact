import React from "react";
import './style.css'
function ContactInfo(props) {
  return (
    <p className="info">
      <strong>{props.itemLabel}: </strong>
      {props.itemValue}
    </p>
  );
}

export default ContactInfo;

import React from "react";
import ContactInfo from "./ContactInfo";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="rounded" src={props.img} alt="dummyalt" />
      </div>
      <div>
        <h2 className="name">{props.name}</h2>

        <ContactInfo itemLabel="Contact" itemValue={props.phone} />
        <ContactInfo itemLabel="Email" itemValue={props.email} />
        <ContactInfo itemLabel="Company" itemValue={props.company} />
      </div>
    </div>
  );
}
export default Card;

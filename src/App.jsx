import React from "react";
import contacts from "./contacts";
import Card from "./Card";
import './style.css'
function addCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
      company={contact.company}
    />
  );
}

function App() {
  return (
    <div className="cardcontainer">
      <h1 className="heading">My Contacts</h1>
      <>{contacts.map(addCard)}</>
    </div>
  );
}

export default App;

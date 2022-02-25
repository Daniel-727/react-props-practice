import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {

  return (
    <>
      <h1 className="heading">My Contacts</h1> {/*passing into our card component their props using our contacts.js file*/}
      <Card
        name={contacts[0].name} 
        image={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </>
  );
}

export default App;

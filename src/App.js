import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { uuid } from "uuidv4";

import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect =
    (() => {
      const retrievedContacts = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      );
      if (retrievedContacts) setContacts(retrievedContacts);
    },
    []);

  useEffect =
    (() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },
    [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

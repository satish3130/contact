import React from "react";
import "./add.css";
import Contactcard from "./Contactcard";

const ContactList = (props) => {
  return (
    <div className="ui celled list">
      {props.contacts.map((contact) => (
        <Contactcard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;

import React, { Component, createContext } from "react";

export const ContactContext = createContext();

class ContactProvider extends Component {
  state = {
    contacts: []
  };
  addContact = ({ name, number, id }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id }]
    }));
  };
  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  };
  editContact = (id, data) => {
  const newContacts =   this.state.contacts.map(contact => {
      if (contact.id === id) {
        return {
          ...contact,
          ...data
        };
      } else {
        return contact;
      }
    });
  this.setState({
     contacts : [...newContacts]
  })  
  };
  findContact = id => {
    const data =  this.state.contacts.find(contact => contact.id === id);
    return data;
  };
  render() {
    return (
      <ContactContext.Provider
        value={{
          contacts: this.state.contacts,
          addContact: this.addContact,
          deleteContact: this.deleteContact,
          findContact : this.findContact,
          editContact : this.editContact
        }}
      >
        {this.props.children}
      </ContactContext.Provider>
    );
  }
}

export default ContactProvider;

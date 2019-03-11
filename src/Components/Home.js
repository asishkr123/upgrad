import React, { Component } from "react";
import Button from "./Button";
import Contacts from "./Contacts";
import { ContactContext } from "../Context/ContactContext";
import "../css/Home.css";
 class Home extends Component {
  // State of the Application
  onClick = (e) => {
    this.props.history.push('add'); 
  };
  render() {
    return (
      <ContactContext.Consumer>
         {
           ({contacts}) => (
            <div className="home">
            <Button buttonText="Add Contact" clickFunc={this.onClick} />
            {contacts.length === 0 ? (
              <div className="home__heading">
                no Contacts Add A Contact TO View It Here
              </div>
            ) : (
              contacts.map(contact => (<Contacts key = {contact.id} contact={contact} />))
            )}
          </div>
           )
         }


      </ContactContext.Consumer>
      
    );
  }
}

export default Home;
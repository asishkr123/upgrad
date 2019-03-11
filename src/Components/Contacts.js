import React from "react";
import Button from "./Button";
import { ContactContext } from "../Context/ContactContext";
import { withRouter } from "react-router-dom";
import "../css/Contact.css";
class Contacts extends React.Component {
  onClick = id => {
    this.context.deleteContact(id);
  };
  onEditBtnClick = id => {
    this.props.history.push(`/edit/${id}`);
  };
  render() {
    const { name, number, id } = this.props.contact;
    return (
      <div className="contact">
            <div className="contact__text"> Name : {name}</div>
            <div className="contact__text"> Number : {number}</div>
            <Button
              buttonText="Edit"
              clickFunc={() => {
                this.onEditBtnClick(id);
              }}
            />
            <Button
              deleteBtn={true}
              buttonText="delete"
              clickFunc={() => {
                this.onClick(id);
              }}
            />
       </div>     
    );
  }
}

Contacts.contextType = ContactContext;
export default withRouter(Contacts);

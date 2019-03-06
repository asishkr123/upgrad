import React, { Component } from "react";
import Button from "./Button";
import { ContactContext } from "../Context/ContactContext";
import { withRouter } from "react-router-dom";
import uuid from "uuid/v1";
class Form extends Component {
 state = {
     name : "",
     number : "",
     error : ""
 }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onBackButtonClick = () => {
     this.props.history.push('/');
  }
  onSubmit = () => {
    const data = {
      name: this.state.name,
      number: this.state.number,
      id: uuid()
    };
    if(!this.state.name || !this.state.number){
        this.setState({
           error : "the Fields Cannot Be Left Empty"
        })
    }else {
    this.context.addContact(data);
    this.props.history.push("/");
    }
    
  };
  render() {
    return (
      <React.Fragment>
        <Button buttonText = "Go Back" clickFunc = {this.onBackButtonClick}/>
        <div
          className="heading"
          style={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
        >
          Add Contact Here
        </div>
        <form className = "form">
        <div className="form__values">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              className="form__input"  
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.onChange}
            />
          </div>
          <div className="form__values">
            <label htmlFor="number" className="form__label">
              Number
            </label>
            <input
              className="form__input"  
              value={this.state.number}
              name="number"
              type="text"
              onChange={this.onChange}
            />
          </div>
        </form>
        <div className="input__data"> name : {this.state.name}</div>
        <div className="input__data"> number : {this.state.number}</div>
        <Button clickFunc={this.onSubmit} buttonText="Add Contact" />
        {this.state.error ? <span className="error">{this.state.error}</span> : ""}
      </React.Fragment>
    );
  }
}

Form.contextType = ContactContext;
export default withRouter(Form);

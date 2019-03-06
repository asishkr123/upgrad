import React, { Component } from "react";
import { ContactContext } from "../Context/ContactContext";
import Button from './Button';
class Edit extends Component {
  state = {
    name : "",
    number : "",
    id :  ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = () => {
    const data = {
      name: this.state.name,
      number: this.state.number,
    };
    if(!this.state.name || !this.state.number){
        this.setState({
           error : "the Fields Cannot Be Left Empty"
        })
    }else {
    this.context.editContact(this.state.id,data);
    this.props.history.push("/");
    }
    
  };
  componentDidMount() {
    const contactData = this.context.findContact(this.props.match.params.id);
    this.setState({
         name : contactData.name,
         number : contactData.number,
         id : contactData.id,
    })
} 
  render() {
    console.log(this.state.name)  
    return (
      <div className="form__container">
        
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

      </div>
    );
  }
}

Edit.contextType = ContactContext;
export default Edit;

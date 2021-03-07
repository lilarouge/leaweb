import React,  { useState, Component } from 'react';
import"./Contact.css";


class Contact extends React.Component {
  state ={
    firstName: "",
    lastName: "",
    email: "",
    message:""

  }
  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);

  }

  render (){
    return (
      <form>
        <input
        name= "firstName"
        placeholder= "FirstName"
        value= {this.state.firstName}
        onChange= {e => this.change (e)}
        />
        <br/>
        <input
        name= "lastName"
        placeholder= "LastName"
        value= {this.state.lastName}
        onChange= {e => this.change (e)}
        />
        <br/>
        <input
        name= "email"
        placeholder= "Email"
        value= {this.state.email}
        onChange= {e => this.change (e)}
        /><br/>
        <input
        name= "message"
        placeholder= "Message"
        value= {this.state.message}
        onChange= {e => this.change (e)}
        />
        <br/>
        <button onClick ={e => this.onSubmit(e)}>Send 
        </button>
        
      </form>
    )
  }
}




  //   render() {
  //     return (
  //         <div className="Contact">
  //         This is the Contact section 
  //         </div>
  //     );
  //   }
  // }

export default Contact;

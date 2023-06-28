import React, { Component } from "react";
import SignUpForm from "./forms/SignUpForm";

export default class SignUpPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <h2>Sign up now!</h2>
        <div className="col-md-6"></div>
        <SignUpForm />
        <div className="col-md-3"></div>
      </div>
    );
  }
}

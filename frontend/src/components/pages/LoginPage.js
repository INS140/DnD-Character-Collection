import React, { Component } from "react";
import LoginForm from "./forms/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <h2>Welcome Back</h2>
        <div className="col-md-6">
          <LoginForm />
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

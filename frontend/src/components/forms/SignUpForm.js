// input for email and password
// submit button
// container for form
import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordconfirmation: "",
      errors: {},
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordconfirmation: this.state.passwordconfirmation,
    };

    axios.post("/***", userData).then((res) => {
      this.setState({
        errors: res.data,
      }).catch((error) => {
        console.log(error);
      });
    });
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, email, password, passwordconfirmation, errors } =
      this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Join Us</h1>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              className={classnames("form-control", {
                "is-invalid": errors.username,
              })}
              type="text"
              name="username"
              value={username}
              onChange={this.changeHandle}
              required
            />
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              className={classnames("form-control", {
                "is-invalid": errors.email,
              })}
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandle}
              required
            />
            {errors.email ? (
              <span style={{ color: "red", fontSize: "10px" }}>
                {errors.email}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label className="control-label">PassWord</label>
            <input
              className={classnames("form-control", {
                "is-invalid": errors.password,
              })}
              type="password"
              name="password"
              value={password}
              onChange={this.changeHandle}
              required
            />
          </div>
          <div className="form-group">
            <label className="control-label">PassWordConfirmation</label>
            <input
              className={classnames("form-control", {
                "is-invalid": errors.passwordconfirmation,
              })}
              type="password"
              name="passwordconfirmation"
              value={passwordconfirmation}
              onChange={this.changeHandle}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

// input for email and password
// submit button
// container for form
import React, { Component } from "react";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Join Us</h1>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={username}
              onChange={this.changeHandle}
              required
            />
          </div>
          <div className="form-group">
            <label className="control-label">PassWord</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
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

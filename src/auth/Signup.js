import React, { Component } from "react";
import { signup } from "../helper";
import Menu from "../core/Menu";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name,
      email,
      password,
    };
    // console.log(user);

    // if (this.state.recaptcha) {
    signup(user).then((data) => {
      if (data.error) this.setState({ error: data.error });
      else
        this.setState({
          error: "",
          name: "",
          email: "",
          password: "",
          open: true,
        });
    });
    // } else {
    //   this.setState({
    //     error: "What day is today? Please write a correct answer!"
    //   });
    // }
  };

  signupForm = (name, email, password) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Nama</label>
        <input
          onChange={this.handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={this.handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">password</label>
        <input
          onChange={this.handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button className="btn btn-raised btn-primary" onClick={this.clickSubmit}>
        Submit
      </button>
    </form>
  );

  render() {
    const { name, email, password, error, open } = this.state;
    return (
      <Menu>
        <div className="container">
          <h2 className="mt-5 mb-5">Signup</h2>
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>

          <div
            className="alert alert-info"
            style={{ display: open ? "" : "none" }}
          >
            Akun telah dibuat. Silahkan login!
          </div>
          {this.signupForm(name, email, password)}
        </div>
      </Menu>
    );
  }
}

export default Signup;

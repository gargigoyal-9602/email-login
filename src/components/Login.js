import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    let isLoggedIn = true;
    const token = localStorage.getItem("token");
    if (token === null) {
      isLoggedIn = false;
    }
    this.state = {
      userName: "",
      password: "",
      isLoggedIn,
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    if (userName === "a" && password === "b") {
      localStorage.setItem("token", "asdfghgjhgfdsedfgh");
      this.setState({
        isLoggedIn: true,
      });
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/admin" />;
    }

    return (
      <div>
        ;<h1>pls login </h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="userName"
            placeholder="enter username"
            value={this.state.userName}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Admin extends Component {
  constructor(props) {
    super(props);
    let isLoggedIn = true;
    const token = localStorage.getItem("token");
    if (token === null) {
      isLoggedIn = false;
    }

    this.state = {
      isLoggedIn,
    };
  }
  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>This is admin page , authorize user have an access to it</h1>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}

export default Admin;

import React, { Component } from "react";
import Menu from "../core/Menu";
import { List } from "./ApiUser";

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    List().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }
  render() {
    const { users } = this.state;
    return (
      <Menu>
        <div className="container">
          <h2 className="mt-5 mb-5">Pengguna</h2>
          <div className="card">{JSON.stringify(users)}</div>
        </div>
      </Menu>
    );
  }
}

export default User;

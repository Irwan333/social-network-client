import React, { Component } from "react";
import { isAuth } from "../helper";
import Menu from "../core/Menu";
import { Redirect, Link } from "react-router-dom";
import { read } from "./ApiUser";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      redirectToSignin: false,
    };
  }

  init = (userId) => {
    const token = isAuth().token;
    read(userId, token).then((data) => {
      if (data.error) {
        console.log("ERROR : ", data.error);
      } else {
        this.setState({ user: data });
      }
    });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  render() {
    const { redirectToSignin, user } = this.state;
    if (redirectToSignin) return <Redirect to="/signin" />;
    return (
      <Menu>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-5 mb-5">Profile</h2>
              <p>Hello {isAuth().user.name}</p>
              <p>Email: {isAuth().user.email}</p>
              <p>{`Bergabung ${new Date(user.created).toDateString()}`}</p>
            </div>
            <div className="col-md-6">
              {isAuth().user && isAuth().user._id === user._id && (
                <div className="d-inline-block mt-5">
                  <Link
                    className="btn btn-raised btn-success mr-5"
                    to={`/user/edit/${user._id}`}
                  >
                    {" "}
                    Edit Profil
                  </Link>
                  <button className="btn btn-raised btn-danger">
                    Hapus Profil
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Menu>
    );
  }
}

export default Profile;

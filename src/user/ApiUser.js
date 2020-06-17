// import axios from "axios";

export const read = (userId, token) => {
  return fetch(`http://localhost:4000/user/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const List = () => {
  // axios({
  //   method: "GET",
  //   url: `${process.env.REACT_APP_API}`,
  //   // headers: {
  //   //   Authorization: `Bearer ${token}`,
  //   // },
  // })
  return fetch("http://localhost:4000/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("RESPONSE : ", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

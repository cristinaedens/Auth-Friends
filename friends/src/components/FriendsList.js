import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
      friends: []
  };

  componentDidMount() {
      this.getData();
  }

getData = () => {
  axiosWithAuth()
  .get("/friends")
  .then(res => {
    console.log(res);
    this.setState({
      friends: res.data
    });
  })
  .catch(err => {
    console.log(err);
  })
};

}//This closes FriendsList

export default FriendsList;
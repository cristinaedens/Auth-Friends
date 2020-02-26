import React from "react";
import axios from "axios";

class Login extends React.Component{
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login", this.state.credentials)
    .then(res => {
      console.log("login: ", res);
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/protected");
  })
  .catch(err => {
      console.log(err.message);
  });
};
render() {
  return (
    <div>
        <form className="formCard" onSubmit={this.login}>
            <input className="loginUser"
                type="text"
                name="username"
                placeholder="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
            />
            <input className="loginUser"
                type="password"
                name="password"
                placeholder="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
            />
            <button type="submit" className="loginbtn">Log in</button>
        </form>
    </div>
  )
}
}

export default Login;  
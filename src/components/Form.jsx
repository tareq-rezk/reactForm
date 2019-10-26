import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    surName: "",
    address: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/webservice/rest/server.php?wstoken=78a575a74389a366a0b8d32e242ee161&moodlewsrestformat=json&wsfunction=core_user_create_users&users[0][username]=user2&users[0][password]=Ndu,1234&users[0][firstname]=Second&users[0][lastname]=User&users[0][email]=second@gmail.com",
        this.state
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { username, password, email, surName, address } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h1>Moodle Edge</h1>
          <h2>Creat New Account</h2>
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <p className="badge-primary">
                Choose Your User Name and Password
              </p>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                id="username"
                value={username}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.changeHandler}
              />
              <small className="form-text text-muted">
                The password must have at least 8 characters, at least one
                digit(s), at least one lower case letter(s), at least one
                alphametric characters such as *,- or #
              </small>
            </div>

            <div className="form-group">
              <p className="badge-primary">Choose Your e-mail and Address</p>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={this.changeHandler}
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <label className="form-check-label" htmlFor="surName">
                Check me out
              </label>
              <input
                type="text"
                className="form-control"
                id="surName"
                placeholder="Surname"
                value={surName}
                onChange={this.changeHandler}
              />
              <label htmlFor="address">City/ Town</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                value={address}
                onChange={this.changeHandler}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;

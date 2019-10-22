import React from "react";
import Button from "react-bootstrap/Button";

const Form = props => {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Moodle Edge</h1>
        <h2>Creat New Account</h2>
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <p className="badge-primary">Choose Your User Name and Password</p>
            <label htmlFor="exampleInputName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="emailHelp" className="form-text text-muted">
              The password must have at least 8 characters, at least one
              digit(s), at least one lower case letter(s), at least one
              alphametric characters such as *,- or #
            </small>
          </div>
          <br />
          <div className="form-group">
            <p className="badge-primary">Choose Your User Name and Password</p>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
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
            />
            <label htmlFor="inputAddress">City/ Town</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;

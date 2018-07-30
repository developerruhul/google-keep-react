import React from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImgPicker from "../../components/imgPicker";
import { signup } from "../../util/auth";
import { firebaseAuth } from "../../config/firebase";

const SignUpWrapper = styled.div`
  header {
    background: orange;
    height: 16rem;
  }

  .login-card {
    max-width: 400px;
    width: 60%;
    margin: 0 auto;
    margin-top: -10rem;
    box-shadow: 0 1px 3px rgba(128, 128, 128, 0.51);
    padding: 3rem 1rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;

    h1 {
      margin-bottom: 1.5rem;
    }

    @media (max-width: 768px) {
      width: 95%;
    }

    form {
      display: flex;
      flex-flow: column;
    }
  }

  .submit-btn {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .signup {
    text-decoration: none;
    button {
      width: 100%;
    }
  }

  margin-bottom: 2rem;
`;

const initState = {
  imgUrl: "",
  email: "",
  pw: "",
  name: "",
  loading: true
};

class SignUp extends React.Component {
  state = {
    ...initState
  };

  addUser = e => {
    e.preventDefault();

    if (!this.state.imgUrl) {
      alert("Please choose a profile picture");
      return;
    }

    this.setState({ loading: true });

    signup({ ...this.state, imgBlob: this.state.imgUrl }).catch(err => {
      alert(err.message);
      this.setState({ ...initState });
    });
  };

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (!user) this.setState({ loading: false });
    });
  }

  render() {
    return (
      <SignUpWrapper>
        <header />
        <main className="login-card">
          <Typography variant="display2">SignUp</Typography>

          <form onSubmit={this.addUser}>
            <ImgPicker onChange={_ => this.setState({ imgUrl: _ })} />

            <TextField
              onChange={_ => this.setState({ name: _.target.value })}
              value={this.state.name}
              label="User Name"
              type="text"
              margin="normal"
              required
            />

            <TextField
              value={this.state.email}
              onChange={_ => this.setState({ email: _.target.value })}
              label="Email"
              type="email"
              autoComplete="current-email"
              margin="normal"
              required
            />

            <TextField
              value={this.state.pw}
              onChange={_ => this.setState({ pw: _.target.value })}
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              required
            />

            <Button
              className="submit-btn"
              variant="raised"
              color="primary"
              type="submit"
              onClick={this.addUser}
              disabled={this.state.loading}
            >
              SignUp
            </Button>

            <Link className="signup" to="/login">
              <Button
                disabled={this.state.loading}
                variant="outlined"
                color="default"
              >
                Login
              </Button>
            </Link>
          </form>
        </main>
      </SignUpWrapper>
    );
  }
}

export default SignUp;

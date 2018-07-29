import React from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
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

    h1{
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
`;

const Login = () => {
  return (
    <LoginWrapper>
      <header />
      <main className="login-card">
        <Typography variant="display2">Login</Typography>
        <form>
          <TextField
            label="Email"
            type="email"
            autoComplete="current-email"
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />

          <Button
            className="submit-btn"
            variant="raised"
            color="primary"
            type="submit"
          >
            Login
          </Button>

          <Link className="signup" to="/signup">
            <Button variant="outlined" color="default">
              SignUp
            </Button>
          </Link>
        </form>
      </main>
    </LoginWrapper>
  );
};

export default Login;

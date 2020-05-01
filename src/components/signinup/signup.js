import React from "react";

import FormInput from "../form/form-input.component";
import CustomButton from "../form/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class Register extends React.Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <SignUpContainer className="center pa2">
          <SignUpTitle className="f2 ">Signup</SignUpTitle>

          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <CustomButton className="br3" type="submit">
              Sign Up
            </CustomButton>
          </form>
        </SignUpContainer>
      </article>
    );
  }
}

export default Register;

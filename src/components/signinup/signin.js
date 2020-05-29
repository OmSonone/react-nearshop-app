import React from "react";

import FormInput from "../form/form-input.component";
import CustomButton from "../form/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase";

import {
  SigninContainer,
  SigninTitle,
  ButtonsBarContainer,
} from "./sign-in.styles.jsx";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <SigninContainer className="center pa4">
          <SigninTitle className="f3">I already have an account</SigninTitle>
          <span>Sign in with your email and password.</span>
          <form className="sign-in-form" onSubmit={this.handleSubmit}>
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
            <ButtonsBarContainer>
              <CustomButton type="submit" className="br2">
                Sign In
              </CustomButton>
              <CustomButton
                className="f3 br2"
                onClick={signInWithGoogle}
                googleSignin={true}
              >
                Google Sign In
              </CustomButton>
            </ButtonsBarContainer>
          </form>
        </SigninContainer>
      </article>
    );
  }
}

export default Signin;

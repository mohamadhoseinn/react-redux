import { useState } from "react";

import FormInput from "../FormInput/FormInput";

import "./SignIn.scss";

const SignIn = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setLogin({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={login.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <label>Email</label>
        <FormInput
          name="password"
          type="password"
          value={login.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;

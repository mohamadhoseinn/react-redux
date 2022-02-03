import { useState } from "react";

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
        <input
          name="email"
          type="email"
          value={login.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={login.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;

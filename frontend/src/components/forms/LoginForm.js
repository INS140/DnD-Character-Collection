// input for email and password
// submit button
// container for form

import React from "react";
import Input from "./Input";

export default function LoginForm({ formData, handleChange, handleSubmit }) {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}

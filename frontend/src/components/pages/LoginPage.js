import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useFetch } from "./custom-hooks/useFetch";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { post } = useFetch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await post("/user", {
        email: formData.email,
        password: formData.password,
      });

      const { user, token } = response;

      console.log("User data:", user);
      console.log("Token:", token);
      console.log("Welcome back {userName}!");

      history.push("/profile");
    } catch (error) {
      // Handle login failure
      console.error(error);
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

import React from "react";
import SignUpForm from "./forms/SignUpForm";
import useFetch from "./custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const { post } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;

    await post("/", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    navigate("/home"); //to home page or profile page?
  };

  return (
    <div className="sign-up">
      <h2>Create Account</h2>
      <p>Let's explore the wonderful world!</p>
      <SignUpForm
        legend="New user register"
        onSubmit={handleSubmit}
        formInput={{
          name: "",
          email: "",
          password: "",
        }}
      />
    </div>
  );
}

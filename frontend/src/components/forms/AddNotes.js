import React, { useContext } from "react";
import Input from "../ui-kit/Input";
import TextArea from "../ui-kit/TextArea";
import Button from "../ui-kit/Button";
import useFetch from "../custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../context/currentUser";
import useFormHandler from "./useFormHandler";

export default function NoteForm() {
  const { post } = useFetch("http://localhost:5000");

  const { currentUser } = useContext(CurrentUser);

  const navigate = useNavigate();

  const { inputs, handleChange } = useFormHandler({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await post("/notes  ", {
        ...inputs,
        user: currentUser.id,
      });

      navigate("/notes");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Note</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          label="Title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />

        <TextArea
          label="Description"
          name="description"
          rows="5"
          value={inputs.description}
          onChange={handleChange}
        />

        <Button type="submit">Save Note</Button>
      </form>
    </div>
  );
}

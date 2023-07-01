// input for email and password
// submit button
// container for form
import Input from "../ui-kit/Input";
import Button from '../ui-kit/Button'
import useFetch from '../custom-hooks/useFetch'
import useFormHandler from "../custom-hooks/useFormHandler";
import { CurrentUser } from "../context/currentUser";
import { useContext } from "react";

export default function LoginForm() {
  const { post } = useFetch() // need url

  const { setCurrentUser } = useContext(CurrentUser)

  const { inputs, handleChange } = useFormHandler({
    username: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }

  return (
    <form className="form grid-2" onSubmit={handleSubmit}>
      <Input
        label="Username"
        labelClass='username'
        type="text"
        name="username"
        value={inputs.username}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        labelClass='password'
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        required
      />
      <Button className="submit" type="submit">Login</Button>
    </form>
  );
}

// Inputfor email and password
// submit button
// container for form
import Input from "../ui-kit/Input";
import Button from "../ui-kit/Button";
import useFormHandler from "../custom-hooks/useFormHandler";
import useFetch from "../custom-hooks/useFetch"
import { CurrentUser } from "../context/currentUser";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const { post } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const { setCurrentUser } = useContext(CurrentUser)

  const navigate = useNavigate()

  const { inputs, handleChange } = useFormHandler({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await post('/users', inputs)

    if (user !== null) {
      const data = await post('/authentication', inputs)
      setCurrentUser(data.user)
      localStorage.setItem('token', data.token)

      navigate('/characters')
    }
  };

  return (
    <form className="form grid-2" onSubmit={handleSubmit}>
      <Input
        label="Username"
        labelClass="username"
        type="text"
        name="username"
        value={inputs.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        labelClass="password"
        type="password"
        name="password"
        value={inputs.name}
        onChange={handleChange}
        required
      />
      <Button className="submit" type="submit">Sign Up</Button>
    </form>
  );
}

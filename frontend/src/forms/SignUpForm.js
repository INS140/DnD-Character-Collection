import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../ui-kit"
import useFormHandler from "../custom-hooks/useFormHandler";
import useFetch from "../custom-hooks/useFetch"
import { CurrentUser } from "../context/currentUser";

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
      <Button className="submit secondary" type="submit">Sign Up</Button>
    </form>
  );
}

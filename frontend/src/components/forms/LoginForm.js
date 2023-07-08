import Input from "../ui-kit/Input";
import Button from '../ui-kit/Button'
import useFetch from '../custom-hooks/useFetch'
import useFormHandler from "../custom-hooks/useFormHandler";
import { CurrentUser } from "../context/currentUser";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"

export default function LoginForm({ setError }) {
  const { post } = useFetch('https://dnd-character-collection-backend.vercel.app')

  const navigate = useNavigate()

  const { setCurrentUser } = useContext(CurrentUser)

  const { inputs, handleChange } = useFormHandler({
    username: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = await post('/authentication', inputs)
      
      if (data.error !== null) {
        setError(data)
      }

      if (data !== null) {
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)

        navigate('/characters')
      }
    } catch (err) {
      console.log(err)
    }
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
      <Button className="submit secondary" type="submit">Login</Button>
    </form>
  );
}

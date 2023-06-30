// input for email and password
// submit button
// container for form
import Input from "../ui-kit/Input";
import Button from '../ui-kit/Button'
import useFetch from '../custom-hooks/useFetch'
import useFormHandler from "../custom-hooks/useFormHandler";

export default function LoginForm() {
  const { post } = useFetch() // need url

  const { inputs, handleChange } = useFormHandler({
    username: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await post("/user", {
    //     email: formData.email,
    //     password: formData.password,
    //   });

    //   const { user, token } = response;

    //   console.log("User data:", user);
    //   console.log("Token:", token);
    //   console.log("Welcome back {userName}!");

    //   history.push("/profile");
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        name="username"
        value={inputs.username}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

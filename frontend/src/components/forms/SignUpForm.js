// Inputfor email and password
// submit button
// container for form
import Input from "../ui-kit/Input";
import Button from "../ui-kit/Button";
import useFormHandler from "../custom-hooks/useFormHandler";

export default function SignUpForm() {
  const { inputs, handleChange } = useFormHandler({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await post("/", inputs);
    // navigate("/home"); //to home page or profile page?
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        name="username"
        value={inputs.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={inputs.name}
        onChange={handleChange}
        required
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}

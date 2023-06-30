// Inputfor email and password
// submit button
// container for form

import Input from "../ui-kit/Input";

import useFormHandler from "../custom-hooks/useFormHandler";

export default function SignUpForm(props) {
  const { legend, onSubmit, formInputs } = props;

  const { inputs, handleChange } = useFormHandler(formInputs);

  return (
    <form className="signup-form" onSubmit={onSubmit}>
      <legend>{legend}</legend>
      <Input
        label="Name"
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        required
      />
      <input
        label="Email"
        type="email"
        name="email"
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
      <button type="submit">Sign Up</button>
    </form>
  );
}

import SignUpForm from "../forms/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <p>Let's raid dungeons and kill some dragons!</p>
      <hr />
      <SignUpForm />
    </div>
  );
}

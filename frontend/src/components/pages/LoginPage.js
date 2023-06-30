import LoginForm from "../forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <p>Welcome back dungeon diver!</p>
      <hr />
      <LoginForm />
    </div>
  );
}

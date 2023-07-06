import { useState } from "react";
import LoginForm from "../forms/LoginForm";

export default function LoginPage() {
  const [validationError, setValidationError] = useState(null)

  return <div className="form-container">
    <h2>Login</h2>
    <p>Welcome back dungeon diver!</p>
    <hr />
    { validationError && <div className="error">
        {validationError.error}
      </div>
    }
    <LoginForm setError={setValidationError} />
  </div>
}

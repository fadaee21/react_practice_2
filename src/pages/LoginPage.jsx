import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context";

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();
    auth.signIn({ loginEmail, loginPassword }, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" onChange={e => setLoginEmail(e.target.value)} />
        </label>
        <label>
          Password: <input name="password" type="password" onChange={e => setLoginPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage
import { useState } from "react";
import "./App.css";
import { webAuth } from "./main";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(`${window.location.origin}/auth-callback`,)

  const handleGoogleLogin = () => {
    webAuth.authorize({
      connection: "google-oauth2",
      redirectUri: `${window.location.origin}/auth-callback`,
      responseType: 'token id_token',
    });
  };

  const handleLogin = () => {
    webAuth.login(
      {
        realm: "Username-Password-Authentication",
        email,
        password,
        redirectUri: `${window.location.origin}/auth-callback`,
        responseType: 'token id_token',
      },
      (error, result) => {
        console.log("Login result:", result);
        console.log("Login error:", error);
      }
    );
  };

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleLogin}>Login with Auth0</button>
    </>
  );
}

export default App;
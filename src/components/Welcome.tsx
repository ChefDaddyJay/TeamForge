import { Link } from "@tanstack/react-router";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src="/TeamForgeIcon-192x192.png" />
      <h1>TeamForge</h1>
      <Link className="App-link" to="/login">
        Login
      </Link>
      or
      <Link className="App-link" to="/signup">
        Sign up
      </Link>
    </div>
  );
}

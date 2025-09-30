import { Link } from "@tanstack/react-router";

export default function Welcome() {
  return (
    <div className="App">
      <div className="welcome">
        <img src="/TeamForgeIcon-192x192.png" />
        <h1>TeamForge</h1>
        <Link className="App-link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

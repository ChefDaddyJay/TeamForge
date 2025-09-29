import { createFileRoute, Link } from "@tanstack/react-router";
import "../App.css";
import Themes from "@/components/Themes";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const changeTheme = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <img src="/TeamForgeIcon-192x192.png" />
        <h1>TeamForge</h1>
        <Themes setTheme={changeTheme} />
        <Link to="/dashboard">Dashboard</Link>
      </header>
    </div>
  );
}

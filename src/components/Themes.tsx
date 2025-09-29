export default function Themes({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  return (
    <div className="themes">
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

import reactLogo from "./assets/react.svg";
import "./App.css";
import { Counting } from "@yoojacha/ui";

function App() {
  const a = 1;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counting />
      </div>
    </div>
  );
}

export default App;

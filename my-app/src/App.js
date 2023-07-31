import "./styles/App.css";

import Hero from "./components/Hero.tsx";
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <NavBar />
    </div>
  );
}

export default App;

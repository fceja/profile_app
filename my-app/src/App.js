import "./styles/App.css";

import Hero from "./components/Hero.tsx";
import NavBar from "./components/NavBar.tsx";
import ImageSlider from "./components/ImageSlider.tsx"

function App() {
  return (
    <div className="App">
      <Hero />
      <NavBar />
      <ImageSlider />
    </div>
  );
}

export default App;

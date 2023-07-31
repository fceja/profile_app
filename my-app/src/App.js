import "./styles/App.css";

import CTALinks from "./components/CTALinks.tsx"
import Footer from "./components/Footer.tsx"
import Hero from "./components/Hero.tsx";
import NavBar from "./components/NavBar.tsx";
import ImageSlider from "./components/ImageSlider.tsx"

function App() {
  return (
    <div className="App">
      <Hero />
      <NavBar />
      <ImageSlider />
      <CTALinks />
      <Footer />
    </div>
  );
}

export default App;

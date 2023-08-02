import "./styles/App.css";

import Footer from "./components/Footer.tsx";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar.tsx";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;

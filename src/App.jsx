import "./App.css";
import Navbar from "./components/header/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import StatisticsPanel from "./components/StatisticsPanel/StatisticsPanel.jsx";
import About from "./components/about/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatisticsPanel />
      <About />
    </>
  );
}

export default App;

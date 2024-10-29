import "./App.css";
import About from "./components/About";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Choose />
      <Team />
      <Footer />
    </>
  );
}

export default App;

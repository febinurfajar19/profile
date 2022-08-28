import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Experiences } from "./components/Experiences";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Experiences />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

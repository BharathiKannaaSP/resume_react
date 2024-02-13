import "./App.scss";
import Declaration from "./Declaration/Declaration";
import Banner from "./components//Banner/Banner";
import About from "./components/About/About";
import Education_Skills_WorkExp from "./components/Education_Skills_WorkExp/Education_Skills_WorkExp";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Banner />
      <About />
      <Education_Skills_WorkExp />
      <Declaration />
    </>
  );
}

export default App;

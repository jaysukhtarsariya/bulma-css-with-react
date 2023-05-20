import "./App.css";
import Application from "./components/Application/Application";
import CTA from "./components/CTA/CTA";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Application />
      <Pricing />
      <CTA />
      <NewsLetter />
    </div>
  );
}

export default App;

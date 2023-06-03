import "./App.css";
import bgBottom from "./assets/bg-bottom.svg";
import bgTop from "./assets/bg-top.svg";
import PricingScreen from "./screens/PricingScreen";

function App() {
  return (
    <div className="bg-neutral-very-light-grayish-blue min-h-screen relative">
      <img src={bgTop} alt="background" className="absolute top-0 right-0" />
      <img
        src={bgBottom}
        alt="background"
        className="absolute bottom-0 left-0"
      />

      <main>
        <PricingScreen />
      </main>
    </div>
  );
}

export default App;

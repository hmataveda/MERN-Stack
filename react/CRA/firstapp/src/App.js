import "./App.css";
import CardSection from "./Components/personcardSection";
import { IntroSection } from "./Components/introSection";

function App(props) {
  return (
    <div className="app">
      <IntroSection />
      <CardSection />
    </div>
  );
}

export default App;

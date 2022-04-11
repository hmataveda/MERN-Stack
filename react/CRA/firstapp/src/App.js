import "./App.css";
import CardSection from "./Components/personcardSection";
import { IntroSection } from "./Components/introSection";
import Myform from "./Components/myForm";

function App(props) {
  return (
    <div className="app">
      <IntroSection />
      <CardSection />
      <Myform />
    </div>
  );
}

export default App;

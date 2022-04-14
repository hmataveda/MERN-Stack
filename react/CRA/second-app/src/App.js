import { useState } from "react";
import "./App.css";
import BoilingTempCalculator from "./Components/BoilingTempCalc/BoilingTempCalc";
import Liftingstate from "./Components/LifitingState/LiftingState";
import DisplayMessage from "./Components/LifitingState/DisplayMessage";
import BoxGenerator from "./Components/Box Generator/Boxgenerator";
function App() {
  const [currentMsg, setCurrentMsg] = useState("Still no message");
  const getMessageFromLift = (msg) => {
    setCurrentMsg(msg);
  };
  return (
    <div className="App">
      <BoxGenerator></BoxGenerator>

      <BoilingTempCalculator></BoilingTempCalculator>
      {/* <Liftingstate sendMsg={getMessageFromLift}></Liftingstate>
      <DisplayMessage msg={currentMsg}></DisplayMessage> */}
    </div>
  );
}

export default App;

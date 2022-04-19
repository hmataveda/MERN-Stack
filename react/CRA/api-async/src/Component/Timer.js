import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    console.log("run only once");
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("in clean up");
      clearInterval(timer);
    };
  }, []);

  return <div>{time}</div>;
}

export default Timer;

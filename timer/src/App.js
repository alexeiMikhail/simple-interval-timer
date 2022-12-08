import * as React from "react";

const App = () => {
  const interval = {
    min: 5,
    sec: 0
  }
  const [counter, setCounter] = React.useState(interval.min * 60 + interval.sec);

  const msg = new SpeechSynthesisUtterance();
  let message = `Beep... Be e e e e eep. It has been ${interval.min} minutes and ${interval.sec} seconds`;
  msg.text = message
  

  const time = () => {
    setTimeout(() => setCounter(counter - 1), 1000);
    if (counter < 0) {
      window.speechSynthesis.speak(msg);
      setCounter(interval.min * 60 + interval.sec);
    }
  }
  React.useEffect(time, [counter]);

  return (
    <div className="App">
      <h2>Countdown: {counter}</h2>
    </div>
  );
}

export default App
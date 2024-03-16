import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import '../../styles/index.css';
import { FaClock } from "react-icons/fa";


const SecondsCounter = () => {
  const [counter, setCounter] = useState(0);
  const [digits, setDigits] = useState(["0", "0", "0", "0", "0", "0"]);
  const [running, setRunning] = useState(true);
  const [countdown, setCountdown] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  const [alertValue, setAlertValue] = useState("");

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (countdown) {
          setCounter((prevSecond) => (prevSecond === 0 ? counter : prevSecond - 1));
        } else {
          setCounter((prevSecond) => (prevSecond === 999999 ? 0 : prevSecond + 1));
        }
      }, 1000);

      if (alertValue && counter === Number(alertValue)) {
        alert(`Your time of ${alertValue} seconds was reached!`);
      }
    }
    return () => clearInterval(interval);
  }, [running, counter, countdown, alertValue]);

  useEffect(() => {
    let newDigit = counter.toString().padStart(6, "0").split("");
    setDigits(newDigit);
  }, [counter]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setCounter(0);
    setCountdown(false);
  };

  const handleCountdown = () => {
    setCounter(Number(initialValue || counter));
    setRunning(true);
    setCountdown(true);
  };

  const handleCountup = () => {
    setCounter(Number(initialValue || counter));
    setRunning(true);
    setCountdown(false);
  };

  const handleInputChange = (e) => {
    setInitialValue(e.target.value);
  };

  const handleAlertInputChange = (e) => {
    setAlertValue(e.target.value);
  };

  return (
    <div>
      <div className="mainCounter">
        <div className="clock"><FaClock /></div>
        <div className="digit">{digits[0]}</div>
        <div className="digit">{digits[1]}</div>
        <div className="digit">{digits[2]}</div>
        <div className="digit">{digits[3]}</div>
        <div className="digit">{digits[4]}</div>
        <div className="digit">{digits[5]}</div>
      </div>

      <Buttons onStart={handleStart} onStop={handleStop} onReset={handleReset} onCountdown={handleCountdown} onCountup={handleCountup} />


      <div className="valueAndButtons">
        <h4>Type initial value for "Count Down" or "Count Up" please</h4>
        <input
          type="text"
          value={initialValue}
          onChange={handleInputChange}
          placeholder="Initial value"
        />

        <h4>Type Alert value please</h4>
        <input
          className="alertInput"
          type="text"
          value={alertValue}
          onChange={handleAlertInputChange}
          placeholder="Alert value"
        />
      </div>
    </div>
  );
};

export default SecondsCounter;




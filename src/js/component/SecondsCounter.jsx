import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

const SecondsCounter = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const number = setInterval(() => {
      setCounter((prev) => (prev == 999999 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(number);
  }, []);

  const digit6 = Math.floor(counter / 100000); 
  const digit5 = Math.floor((counter % 100000) / 10000); 
  const digit4 = Math.floor((counter % 10000) / 1000); 
  const digit3 = Math.floor((counter % 1000) / 100); 
  const digit2 = Math.floor((counter % 100) / 10); 
  const digit1 = counter % 10; 

  return (
    <div className="mainCounter">
      <div><i className="fa-solid fa-clock"></i></div>
      <div className="digit">{digit6}</div>
      <div className="digit">{digit5}</div>
      <div className="digit">{digit4}</div>
      <div className="digit">{digit3}</div>
      <div className="digit">{digit2}</div>
      <div className="digit">{digit1}</div>
    </div>
  );
};

export default SecondsCounter;


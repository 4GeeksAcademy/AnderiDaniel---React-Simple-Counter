import React from 'react';

const Buttons = ({ onStart, onStop, onReset, onCountdown, onCountup }) => {
    return (
        <div >
            <div className="buttons">
                <button onClick={onCountdown} className="button btn btn-outline-danger">Count Down</button>
                <button onClick={onCountup} className="button btn btn-outline-primary">Count Up</button>
            </div>
            <div className="buttons">
                <button onClick={onStop} className="button btn btn-danger">Stop</button>
                <button onClick={onStart} className="button btn btn-success">Start</button>
                <button onClick={onReset} className="button btn btn-warning">Reset</button>
            </div>   
        </div>
    );
};

export default Buttons;

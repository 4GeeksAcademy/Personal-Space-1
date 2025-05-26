import React, { useState } from "react";
//Show/Hide Password

const Example3 = () => {
    const [inputValue, setInputValue] = useState("");
    function grabber (e) {
        const newValue = e.target.value;
        setInputValue(newValue);
    };
    function hider () {
        let result = "";
        for (let char of inputValue) {
            result += "*";
        };
        setInputValue(result);
    };
    return (
        <div className="d-flex p-2 gap-3">
            <input type="text" placeholder="Write your password" onChange={grabber}></input>
            <button type="button" className="btn btn-light" onClick={hider}>Hide your password!!!</button>
            <div>{inputValue}</div>
        </div>
    )
};

export default Example3;
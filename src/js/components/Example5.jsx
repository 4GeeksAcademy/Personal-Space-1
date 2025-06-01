import React, { useState, useEffect } from "react";

const Example5 = () => {
    const [color, setColor] = useState("")
    let myArray = ["red", "green", "dark", "blue"];
    function randomizer () {
        let random = Math.floor(Math.random() * myArray.length);
        setColor(myArray[random]);
    };


    return (
        <div className="d-flex p-2 gap-3">
            <div>
                <button type="button" className="btn btn-warning" onClick={randomizer}>Press this to change the color to random</button>
            </div>
            <div id="the-other-box" className={`${color === "" ? "red" : color}`}>
            </div>
        </div>
    )
}

export default Example5;
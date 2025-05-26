import React, { useState } from "react";
//Button to turn on/off a lightbull

const Example2 = () => {
    const [status, setStatus] = useState(false);
    function change () {
        if (status === false) {
        setStatus(true);
    }
    else {
        setStatus(false)
    }
};

    return (
    <div className="d-flex gap-3 p-2">
        <button type="button" className="btn btn-dark" onClick={change}>On/Off</button>
        <div id="lightbulb" className={`${status === true ? "glow-box" : "" }`}></div>
    </div>
    )
};

export default Example2;
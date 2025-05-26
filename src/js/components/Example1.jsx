import React, { useState } from "react";
//Counter

const Example1 = () => {
    const [count, setCount] = useState(0);
    function increase () {
        setCount(count + 1);
    };
    function decrease () {
        setCount(count - 1);
    };
    function reset () {
        setCount(0);
    };

    return (
        <div className="d-flex p-2 gap-3">
            <button type="button" className="btn btn-success" onClick={increase}>Increment the count by 1</button>
            <button type="button" className="btn btn-danger" onClick={decrease}>Decrease the count by 1</button>
            <button type="button" className="btn btn-primary" onClick={reset}>Reset count to 0</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Example1;
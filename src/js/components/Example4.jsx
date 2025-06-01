import React, { useState } from "react"

const Example4 = () => {
    const [status, setStatus] = useState("");
    function colorChanger (color) {
        setStatus(color);
    }

    return (
        <div className="p-2 d-flex gap-3">
            <div>
                <button type="button" className="btn btn-primary" onClick={() => colorChanger("blue")}>Blue</button>
                <button type="button" className="btn btn-danger" onClick={() => colorChanger("red")}>Red</button>
                <button type="button" className="btn btn-success" onClick={() => colorChanger("green")}>Green</button>
                <button type="button" className="btn btn-dark" onClick={() => colorChanger("dark")}>Dark</button>
            </div>
            <div id="the-box" className={status}>
            </div>
        </div>
    )
}

export default Example4;
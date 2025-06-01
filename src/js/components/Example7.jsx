import React, { useState } from "react";

const Example7 = () => {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [inputValue, setInputValue] = useState(null);

    function loaded () {
        fetch("https://api.api-ninjas.com/v1/trivia", {
            headers: {"X-Api-Key": "OgyKXlOcPHQ6H9Ruo9ppHg==2ZV9YBDqOaC8btDy"}
        })
        .then((response) => {
            if (response.ok === false) {
                throw new Error("Error al traer datos")
            }
            return response.json();
        }) 
        .then((data) => {
            setQuestion(data[0].question);
            setAnswer(data[0].answer);
        })
        .catch((error) => {
            alert(error)
        })
    }
    function grabber (e) {
        const myResponse = e.target.value;
        setInputValue(myResponse);
    }
    function verifier () {
        if (inputValue === answer) {
            alert("You got it!!!")
        }
        else {
            alert("Try again")
        }
    }
    function handleKeyDown (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            verifier();
        }
    }

    return (
    <div className="d-flex p-2 gap-4">
        <div>
            <button type="button" className="btn the-button" onClick={loaded}>Generate a new question</button>
        </div>
        <div id="the-question" className="d-flex align-items-center ps-3">{question}</div>
        <div>
            <form>
                <input 
                type="text" 
                placeholder="Write your answer" 
                className="form-control" 
                value={inputValue}
                onChange={grabber}
                onKeyDown={handleKeyDown}
                ></input>
            </form>
        </div>
    </div>
    )
}

export default Example7;
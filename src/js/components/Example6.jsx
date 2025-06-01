import React, { useState, useEffect } from "react";

const Example6 = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [kind, setKind] = useState("")

    function loaded () {
        fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: { "X-Api-Key" : "OgyKXlOcPHQ6H9Ruo9ppHg==2ZV9YBDqOaC8btDy"}
        })
        .then((response) => {
            console.log(response)
            if (response.ok === false) {
                throw new Error("Error al traer datos")
            }
            return response.json();
        })
        .then((data) => {
            setQuote(data[0].quote)
            setAuthor(data[0].author)
            setKind(data[0].category)
        })
        .catch((error) => {
            alert(error)
        })
    }
    return (
        <div className="p-2">
            <div>
                <button type="button" className="btn the-button" onClick={loaded}>Generate a random quote with API</button>
            </div>
            <div>
                <h4 className="the-quote">{quote}</h4>
                <p className="the-quote">{author}</p>
                <p className="the-quote">{kind}</p>
            </div>
        </div>
    )
}

export default Example6;
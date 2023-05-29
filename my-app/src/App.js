import axios from "axios";
import { useState } from "react";


function App() {
    const [ItemData, setItemData] = useState("");


    function InputChange(event){
        setItemData({
            ...ItemData,
            [event.target.name]: event.target.value
        })
    }

    //
    function callApi(event) {
        event.preventDefault();
        const value = event.target[0].value;
        const obj = {
            model: "text-davinci-003",
            prompt: value,
            max_tokens: 300,
            temperature: 0,
        };

        var newValue = {};
        const headers = {
            Authorization:
                "Bearer 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",
        };

        axios
            .post("https://api.openai.com/v1/completions", obj, { headers })
            .then(function (response) {
                var description = response.data.choices[0].text;
                console.log(description);
                
                newValue = { description: description, userInput: value };
                // make call
                axios
                .post("http://localhost:4000/Direction/createItem", newValue)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="App">
            <form onSubmit={callApi}>
                <textarea id="attribute" name="attribute" rows="3"  onChange={InputChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;

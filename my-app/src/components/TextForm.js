import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUPClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLOCase = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => { // We get an event object automatically as a parameter when event change occurs
        console.log("OnChange was clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>Convert to uppercase</button>
        <button className="btn btn-success" onClick={handleLOCase}>Convert to lowercase</button>
    </div>
  )
}

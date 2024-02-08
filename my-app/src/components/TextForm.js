import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUPClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text was converted to uppercase.", "success")
    }

    const handleLOCase = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text was converted to lowercase.", "success");
    }

    const handleOnChange = (event) => { // We get an event object automatically as a parameter when event change occurs
        console.log("OnChange was clicked");
        setText(event.target.value);
    }

    const handleClear = () => {
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared.", "success");
    }

    const handleCopy = ()=>{
        console.log("Copy to Clipboard");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard.", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter text here' id="myBox" rows="8" style={{backgroundColor : props.mode==='dark'?'#13466e':'white',
            color : props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>Convert to uppercase</button>
            <button className="btn btn-success mx-1 my-1" onClick={handleLOCase}>Convert to lowercase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-warning mx-1 my-1" onClick={handleCopy}>Copy To Clipboard</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='light'?'#042743':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            {/* Used regular expression study about them in Java Script tuts. */}
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0? text: "Enter Something to preview"}</p>
        </div>
        </>
  )
}

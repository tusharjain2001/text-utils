import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase as clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    // console.log("uppercase as clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handlecleartext = () => {
    // console.log("uppercase as clicked");
    let newtext = '';
    setText(newtext);
  };

  const handleOnChange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here");

  // console.log(props);
  return (
    <>
    <div className="container" style={{color : props.mode==='dark' ?'white':'black'}}>

      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
          style={{backgroundColor : props.mode==='dark' ?'grey':'white',color :props.mode==='dark' ?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handlecleartext}>
        Clear Text
      </button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    </>
  );
}




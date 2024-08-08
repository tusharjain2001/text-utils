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
  const handleOnChange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert To Lowercase
      </button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    </>
  );
}

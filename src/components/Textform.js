import React, { useState } from "react";

//State and event handler in react

export default function Textform(props) {
  const handleUpclick = () => {
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Uppercase!", "success");
  };
  const handleLoclick = () => {
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to Lowercase!", "success");
  };

  const handeleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleClearclick = () => {
    // console.log("On change");
    let newText = "";
    setText(newText);
    props.showAlert(": Text Cleared!", "success");
  };
  const handleCopy = () => {
    // console.log("I am a copy of your text")
    // var text = document.getElementById("myBox")
    // text.select();
    navigator.clipboard.writeText(text);
    //Deselect the text after clicking the copy text button to copy the text
    // document.getSelection().removeAllRanges();
    props.showAlert(": Text Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Removed Extra Spaces!", "success");
  };

  const [text, setText] = useState(""); //it is a method to make a state
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          {/* Here in style, single {} means using javascript and double {{}} means using object within javascript */}
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handeleOnchange}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpclick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoclick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearclick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        {/* Below give the split give the length of words and singly .length gives the length of characters  and here filter use to remove the counting of space as a word*/}
        {/* Here (/\s+/) uses to count the word when typing on new line */}
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        {/* Below give the split give the time to read the word and here filter use to remove the counting of space as a word*/}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          takes mintues to read word
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

import React from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    // border: '2px solid',
    // borderColor: props.mode ==='dark'?'white':'#042743'
}

  //used state veriables to enable or disable dark mode

//   const [btntext, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "1px solid white",
//       });
//       setBtnText("Enable Light Mode");
//     } else {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable Dark Mode");
//     }
//   };

  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Manipulator is a powerful text analysis tool that offers a
              range of text processing capabilities, including converting text
              to uppercase or lowercase, clearing text, and removing extra
              spaces. With this app, you can easily manipulate and clean your
              text, making it more manageable and easier to work with. The clear
              text feature removes any unwanted characters, symbols, or
              formatting, leaving only the raw text behind, while the extra
              space removal feature helps you to clean up text by removing any
              extra spaces.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free To Use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Manipulator is a free-to-use text analysis tool that offers a range of
              powerful text processing capabilities. With this app, you can
              easily manipulate and clean your text, making it more manageable
              and easier to work with. Whether you need to convert text to
              uppercase or lowercase, clear text, or remove extra spaces, MyApp
              has you covered. The app uses advanced natural language processing
              techniques to provide insights such as sentiment analysis, key
              phrases extraction, and topic modeling, giving you a deeper
              understanding of the content of your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Manipulator is a browser-compatible text analysis tool that can be
              accessed from any device with an internet connection. This makes
              it easy and convenient to use, regardless of where you are or what
              device you're using. Whether you're on a desktop computer, laptop,
              tablet, or smartphone, you can access MyApp and take advantage of
              its powerful text processing capabilities.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div> */}
    </div>
  );
}

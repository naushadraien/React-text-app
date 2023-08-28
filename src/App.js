import { useState } from "react";
import Alert from "./components/Alert";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
//import Routes instead of Switch as
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Tells whether darkmode is enabled or not

  const [alert, setAlert] = useState(null); // This is for alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(": Dark mode has been been enabled", "success");
      // document.title = 'Text Manipulator - Dark Mode '; //This is for changing the tile of page when enabling dark mode
      // setInterval(() => {
      //   document.title='MyApp is Amazing ';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install MyApp Now ';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been been enabled", "success");
      // document.title = 'Text Manipulator - Light Mode '; //This is for changing the tile of page when disabling dark mode
    }
  };

  return (
    <>
      {/* Project 1 */}
      {/* <Navbar title="My App2" aboutText="About MY APP2" /> */}
      {/* <Navbar  /> */}
      <Router>
        <Navbar title="TextCraft" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
                /users/home --> Component 2 //Here exact matches the exact matching for Component 2 */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  mode={mode}
                  heading="Try TextCraft - Word Counter, Character Counter, Remove extra spaces "
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

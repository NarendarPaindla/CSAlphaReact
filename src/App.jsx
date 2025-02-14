import React from "react";
import { createRoot } from "react-dom/client";
import FormInput from "./components/FormInput";
import './st.css';
function App() {
  const [isMousedOver, setMouseOver] = React.useState(false);
  const [headingText, setHeadingText] = React.useState("Fill the Form");
  const [isClicked, setButton] = React.useState(false);

  function MouseOutEvent() {
    setMouseOver(false);
  }

  function MouseOverEvent() {
    setMouseOver(true);
  }

  function ClickEvent() {
    setHeadingText("Form has been filled");
    setButton(true);
  }

  return (
    <div className="container">
      <div className="incrementBox">
        <h1>{headingText}</h1>
        <div style={{ display: isClicked ? "none" : "inline-block" }}>
          <FormInput
            label="Username"
            labelfor="pass"
            inputid="uname"
            inputname="uname"
            inputtype="text"
            inputplaceholder="Enter your username"
          />
          <button
            style={{ backgroundColor: isMousedOver ? "#1F1f1f" : "#3E4684" }}
            onClick={ClickEvent}
            onMouseOver={MouseOverEvent}
            onMouseOut={MouseOutEvent}
          >
            Sumbit Details
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
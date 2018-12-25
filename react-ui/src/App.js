import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { saveQuestionnaire } from "./actions/questionnaire";
import { questionnaire } from "./mockData";

//use this later
const isJson = item => {
  item = typeof item !== "string" ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === "object" && item !== null) {
    return true;
  }

  return false;
};

const App = props => {
  const saveQuestionnaire = props.saveQuestionnaire;
  const textInput = React.createRef();
  const responseMessage = React.createRef();

  const parseAndSaveJSON = () => {
    const jsonObj = JSON.parse(textInput.current.value);
    saveQuestionnaire(jsonObj);
    debugger;
    responseMessage.current.innerText = "Saved.";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Demo-Project-Challenge</h1>
      </header>
      <div>
        <textarea
          ref={textInput}
          placeholder="Paste your JSON here"
          value={JSON.stringify(questionnaire)}
        />
      </div>
      <div>
        <input
          type="button"
          onClick={parseAndSaveJSON}
          value="Create Questionnaire from JSON"
        />
      </div>
      <div>
        <p ref={responseMessage} />
      </div>
    </div>
  );
};

const ConnectedApp = connect(
  null,
  { saveQuestionnaire },
)(App);

export default ConnectedApp;

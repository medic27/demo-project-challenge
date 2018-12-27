import React from "react";
import "./../css/Home.css";
import { connect } from "react-redux";
import { saveQuestionnaire } from "../actions/questionnaire";
import { selectQuestionnaireId, selectQuestionnaireStatus } from "../selectors";
import { css, StyleSheet } from "aphrodite";
import { Link } from "react-router-dom";
import { isJson } from "./../utils";

const App = props => {
  const { saveQuestionnaire, questionnaireStatus, questionnaireId } = props;
  const textInput = React.createRef();
  const displayResult =
    questionnaireStatus === "success" && questionnaireId != null;
  const url = `http://localhost:3000/res/${questionnaireId}`;

  const parseAndSaveJSON = () => {
    if (!isJson(textInput.current.value)) {
      alert("Please enter a JSON object");
      return;
    }
    const jsonObj = JSON.parse(textInput.current.value);
    saveQuestionnaire(jsonObj);
  };

  return (
    <div className="App">
      <div>
        <textarea
          ref={textInput}
          placeholder="Paste your JSON here"
          className={css(styles.textarea)}
        />
      </div>
      <div>
        <input
          type="button"
          onClick={parseAndSaveJSON}
          value="Create Questionnaire from JSON"
          style={{ fontSize: "20px" }}
        />
      </div>
      {displayResult && (
        <div>
          <p>JSON Questionnaire Saved to DB.</p>
          <p>You can use this URL to access the questionnaire:</p>
          <p>
            <Link to={`/res/${questionnaireId}`}>{url} </Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    questionnaireId: selectQuestionnaireId(state),
    questionnaireStatus: selectQuestionnaireStatus(state),
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  { saveQuestionnaire },
)(App);

export default ConnectedApp;

const styles = StyleSheet.create({
  textarea: {
    width: 500,
    height: 300,
  },
});

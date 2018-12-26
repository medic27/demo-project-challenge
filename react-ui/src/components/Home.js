import React from "react";
import "./../css/Home.css";
import { connect } from "react-redux";
import { saveQuestionnaire } from "../actions/questionnaire";
import { questionnaire } from "../mockData";
import { selectQuestionnaireId, selectQuestionnaireStatus } from "../selectors";
import { css, StyleSheet } from "aphrodite";

const App = props => {
  const { saveQuestionnaire, questionnaireStatus, questionnaireId } = props;
  const textInput = React.createRef();
  const displayResult =
    questionnaireStatus === "success" && questionnaireId != null;
  const url = `http://localhost:3000/res/${questionnaireId}`;

  const parseAndSaveJSON = () => {
    const jsonObj = JSON.parse(textInput.current.value);
    saveQuestionnaire(jsonObj);
  };

  return (
    <div className="App">
      <div>
        <textarea
          ref={textInput}
          placeholder="Paste your JSON here"
          value={JSON.stringify(questionnaire)}
          className={css(styles.textarea)}
        />
      </div>
      <div>
        <input
          type="button"
          onClick={parseAndSaveJSON}
          value="Create Questionnaire from JSON"
        />
      </div>
      {displayResult && (
        <div>
          <p>JSON Questionnaire Saved to DB.</p>
          <p>You can use this URL to access the questionnaire:</p>
          <p> {url} </p>
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

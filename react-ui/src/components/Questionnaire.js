import React from "react";
import { connect } from "react-redux";
import { selectQuestionnaireData, selectQuestionnaireId } from "./../selectors";
import { getQuestionnaire } from "./../actions/questionnaire";
import { updatePii, postAnswers } from "./../actions/answers";
import lifecycle from "react-pure-lifecycle";
import { compose } from "recompose";
import Section from "./Section";
import { css, StyleSheet } from "aphrodite";

const Questionnaire = props => {
  const {
    questionnaire: { displayName, sections },
    updatePii,
    postAnswers,
  } = props;

  const sectionsArray =
    sections &&
    sections.map((sectionObj, index) => (
      <div key={`${index}-key`}>
        <h4>{`Section ${index + 1}. ${sectionObj.displayName}`}</h4>
        <Section sectionObj={sectionObj} sectionIndex={index} />
      </div>
    ));

  return (
    <div className={css(styles.container)}>
      <section className="header">
        <header>
          <h1> {displayName} </h1>
        </header>
      </section>
      <section>
        <h4>Please enter your name and email</h4>
        <p>
          Name:
          <input
            type="text"
            name="name"
            className={css(styles.pii)}
            onChange={e => updatePii("name", e.target.value)}
          />
        </p>
        <p>
          Email:
          <input
            type="email"
            name="email"
            className={css(styles.pii)}
            onChange={e => updatePii("email", e.target.value)}
          />
        </p>
      </section>
      <section>{sectionsArray}</section>
      <section>
        <button
          className={css(styles.submitButton)}
          onClick={() => postAnswers()}>
          Submit Answers!
        </button>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    questionnaire: selectQuestionnaireData(state),
    questionnaireId: selectQuestionnaireId(state),
  };
};

const componentDidMount = props => {
  const { getQuestionnaire, questionnaireId, match } = props;
  const matchId = match.params.id;
  getQuestionnaire(matchId || questionnaireId);
};

const methods = {
  componentDidMount,
};

export default compose(
  connect(
    mapStateToProps,
    { getQuestionnaire, updatePii, postAnswers },
  ),
  lifecycle(methods),
)(Questionnaire);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingBottom: 30,
  },
  pii: {
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
  },
});

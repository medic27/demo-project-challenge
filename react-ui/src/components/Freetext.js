import React from "react";
import { css, StyleSheet } from "aphrodite";
import { updateAnswers } from "./../actions/answers";
import { connect } from "react-redux";

const Freetext = ({
  text,
  sectionIndex,
  questionIndex,
  updateAnswers,
  savedAnswer,
  disabled,
}) => (
  <div className={css(styles.freetextContainer)}>
    <p>{`${questionIndex + 1}. ${text}`}</p>
    <div>
      <textarea
        className={css(styles.textarea)}
        onChange={e => {
          updateAnswers(sectionIndex, questionIndex, e.target.value);
        }}
        value={savedAnswer}
        disabled={disabled}
      />
    </div>
  </div>
);

export default connect(
  null,
  { updateAnswers },
)(Freetext);

const styles = StyleSheet.create({
  freetextContainer: {
    marginBottom: 5,
  },
  textarea: {
    width: 500,
    marginLeft: 20,
    fontSize: 14,
  },
});

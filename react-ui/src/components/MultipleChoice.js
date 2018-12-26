import React from "react";
import { css, StyleSheet } from "aphrodite";
import { updateAnswers } from "./../actions/answers";
import { connect } from "react-redux";

const MultipleChoice = ({
  updateAnswers,
  text,
  options,
  questionIndex,
  sectionIndex,
  savedAnswer,
}) => (
  <div>
    <p>{`${questionIndex + 1}. ${text}`}</p>

    {options.map((optionObj, index) => (
      <div className={css(styles.questionContainer)} key={`mc-${index}`}>
        <p>
          <input
            name={`${sectionIndex}-${questionIndex}`}
            type="radio"
            value={optionObj.text}
            className={css(styles.input)}
            onChange={e => {
              updateAnswers(sectionIndex, questionIndex, e.target.value);
            }}
            checked={savedAnswer === optionObj.text}
          />
          {optionObj.text}
        </p>
      </div>
    ))}
  </div>
);

export default connect(
  null,
  { updateAnswers },
)(MultipleChoice);

const styles = StyleSheet.create({
  input: {
    marginRight: 10,
  },
  questionContainer: {
    marginLeft: 20,
  },
});

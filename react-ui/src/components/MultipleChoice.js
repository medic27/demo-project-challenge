import React from "react";
import { css, StyleSheet } from "aphrodite";

const MultipleChoice = ({ text, options, questionIndex, sectionIndex }) => (
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
          />
          {optionObj.text}
        </p>
      </div>
    ))}
  </div>
);

export default MultipleChoice;

const styles = StyleSheet.create({
  input: {
    marginRight: 10,
  },
  questionContainer: {
    marginLeft: 20,
  },
});

import React from "react";
import Freetext from "./Freetext";
import MultipleChoice from "./MultipleChoice";

const Section = ({ sectionObj, sectionIndex, answerSection }) => {
  const { questions } = sectionObj;

  const Questions = questions.map((questionObj, index) => {
    const { type, text, options } = questionObj;

    if (type === "freetext") {
      return (
        <Freetext
          text={text}
          questionIndex={index}
          sectionIndex={sectionIndex}
          savedAnswer={answerSection[index].answer}
          key={`freetext-${index}`}
        />
      );
    }
    return (
      <MultipleChoice
        text={text}
        options={options}
        questionIndex={index}
        sectionIndex={sectionIndex}
        savedAnswer={answerSection[index].answer}
        key={`mc-${index}`}
      />
    );
  });

  return Questions;
};

export default Section;

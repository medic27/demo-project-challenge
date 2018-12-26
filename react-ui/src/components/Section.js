import React from "react";
import Freetext from "./Freetext";
import MultipleChoice from "./MultipleChoice";

const Section = ({ sectionObj, sectionIndex, answerSection }) => {
  const { questions } = sectionObj;

  const Questions = questions.map((questionObj, index) => {
    const { type, text, options } = questionObj;
    const savedAnswer = answerSection ? answerSection[index].answer : "";

    if (type === "freetext") {
      return (
        <Freetext
          text={text}
          questionIndex={index}
          sectionIndex={sectionIndex}
          savedAnswer={savedAnswer}
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
        savedAnswer={savedAnswer}
        key={`mc-${index}`}
      />
    );
  });

  return Questions;
};

export default Section;

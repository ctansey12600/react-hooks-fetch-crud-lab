import React, { useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questions, onDelete, onUpdate } ) {
  const displayedQuestions = questions.map((question) => {
    return (
      <QuestionItem key={question.id} question={question} onDelete={onDelete}/>
    )
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayedQuestions}</ul>
    </section>
  );
}

export default QuestionList;

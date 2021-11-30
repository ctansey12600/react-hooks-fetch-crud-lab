import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(data => setQuestions(data))
  }, [])

  function handleUpdate(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if(question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  function handleDelete(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id)
      setQuestions(updatedQuestions)
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  } 

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onAddQuestion={handleAddQuestion}/> : 
      <QuestionList onDelete={handleDelete} onUpdate={handleUpdate} questions={questions}/>
      }
    </main>
  );
}

export default App;

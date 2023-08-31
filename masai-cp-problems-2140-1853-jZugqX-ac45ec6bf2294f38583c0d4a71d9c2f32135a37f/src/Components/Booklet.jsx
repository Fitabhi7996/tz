import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

function Booklet() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [examStart, setExamStart] = useState(false);

  const startExam = async () => {
    const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
    const data = await response.json();
    // console.log(data.data);
    setQuestions(data.data);
    setScore(0);
    setExamStart(true);
  };

  const endExam = () => {
    setQuestions([]);
    setScore(0);
    setExamStart(false);
  };

  return (
    <div data-testid="Booklet">
      {!examStart ? (
        <div className="welcome-div">
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={startExam}>Start Exam</button>
        </div>
      ) : (
        <div className="questions-container">
          <h3>Score: {score}</h3>
          <button onClick={endExam}>End Exam</button>
          {questions.map((question, index) => (
            <QuestionCard key={index} question={question} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Booklet;
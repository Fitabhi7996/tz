import React, { useState } from 'react';
import Option from './Option'; 

function QuestionCard({ question }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (option) => {
    if (!selectedOption) {
      // console.log(option);
      setSelectedOption(option);
      
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            selected={selectedOption === option}
            correct={option === question.correctAnswer}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
      <div className="show-ans">
        <button onClick={toggleAnswer}>
          {showAnswer ? 'Hide Ans' : 'Show Ans'}
        </button>
        {showAnswer && <p>{question.correctAnswer}</p>}
      </div>
    </div>
  );
}

export default QuestionCard;
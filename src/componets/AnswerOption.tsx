import React from 'react';

interface AnswerOptionProps {
  option: string;
  handleAnswer: (selectedAnswer: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, handleAnswer }) => {
  return (
    <li>
      <button onClick={() => handleAnswer(option)}>{option}</button>
    </li>
  );
};

export default AnswerOption;

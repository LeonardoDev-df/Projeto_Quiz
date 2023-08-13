import React, { useState } from 'react';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'Qual é a capital da França?',
      options: ['Madrid', 'Paris', 'Berlim', 'Roma'],
      correctAnswer: 'Paris',
    },
    // ... outras perguntas ...
  ];

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Avançar para a próxima pergunta
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>Pergunta {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Fim do Quiz!</h2>
          <p>Pontuação final: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;


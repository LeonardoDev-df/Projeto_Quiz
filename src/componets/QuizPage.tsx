import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './QuizPage.css'; // Importe o arquivo CSS

const QuizPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const playerName = searchParams.get('name');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Tempo inicial em segundos
  const quizTitle = "Quiz de Conhecimentos Gerais";
  const [userAnswered, setUserAnswered] = useState(false);


  const questions = [
    {
      question: 'Qual é a capital da França?',
      options: ['Madrid', 'Paris', 'Berlim', 'Roma'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Qual é o maior planeta do Sistema Solar?',
      options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
      correctAnswer: 'Júpiter',
    },
    {
      question: 'Quem pintou a Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'Qual é o rio mais longo do mundo?',
      options: ['Nilo', 'Amazonas', 'Mississippi', 'Yangtzé'],
      correctAnswer: 'Nilo',
    },
  ];
  

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleOptionClick = (optionIndex: any) => {
    if (!isCorrectAnswer && !userAnswered) {
      setSelectedOptionIndex(optionIndex);
      const selectedOption = questions[currentQuestion].options[optionIndex];
  
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1); // Soma 1 ponto ao score se a opção estiver correta
        setIsCorrectAnswer(true); // Define isCorrectAnswer como true se a resposta for correta
      } else {
        setScore(score); // Mantém a pontuação se a opção estiver errada
        setIsCorrectAnswer(false); // Define isCorrectAnswer como false se a resposta for incorreta
      }
  
      setUserAnswered(true); // Define que o usuário respondeu
    }
  };
  


  useEffect(() => {
    if (timeLeft > 0 && currentQuestion < questions.length) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, currentQuestion]);

// ...

// ...

useEffect(() => {
    if (timeLeft === 0 && currentQuestion < questions.length) {
      if (userAnswered) {
        setUserAnswered(false); // Reiniciar o estado de usuário respondeu
        setSelectedOptionIndex(-1); // Reiniciar o índice da opção selecionada
        setIsCorrectAnswer(false); // Reiniciar a variável de resposta correta
        
        // Avançar para a próxima pergunta
        setCurrentQuestion(currentQuestion + 1);
  
        // Reiniciar o temporizador para a próxima pergunta
        setTimeLeft(10);
    } else if (currentQuestion === questions.length - 1) {
        // Caso o usuário não responda e seja a última pergunta, encerrar o quiz
        setCurrentQuestion(questions.length); // Define currentQuestion como o valor total de perguntas
      }
    }
  }, [timeLeft, currentQuestion, userAnswered]);
  
  // ...
  
  
  

  // ...

return (
    <div className="container">
      <div className="quiz-wrapper">
        <header className="header-quiz">
          <h1>{quizTitle}</h1>
          {currentQuestion < questions.length && (
            <p>Pergunta {currentQuestion + 1} de {questions.length}</p>
          )}
        </header>
        {currentQuestion < questions.length ? (
          <div className='quest'>
            <p className='questio'>{questions[currentQuestion].question}</p>
            <p>Tempo restante: {timeLeft} segundos</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => {
                const isCorrectAnswer = option === questions[currentQuestion].correctAnswer;
                const isSelected = selectedOptionIndex === index;
  
                let buttonClassName = 'quest-button';
                if (isSelected) {
                  buttonClassName += isCorrectAnswer ? ' correct' : ' incorrect';
                }
  
                return (
                  <li key={index}>
                    <button
                      className={buttonClassName}
                      onClick={() => handleOptionClick(index)}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>
            {isCorrectAnswer && (
              <div className={`result ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
                {isCorrectAnswer ? 'Resposta correta!' : 'Resposta incorreta!'}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2>Fim do Quiz!</h2>
            {playerName && <p>Jogador: {playerName}</p>}
            <p>Pontuação final: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
  
  // ...
  
};

export default QuizPage;









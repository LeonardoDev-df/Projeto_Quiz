import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css'; // Importe o arquivo CSS

const StartPage = () => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className="container">
      <div className="quiz-wrapper">
        <h2>Quiz App</h2>
        <div className='organize'>
            <input
            type="text"
            placeholder="Digite seu nome"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            />
            
        </div>
            <Link to={`/quiz?name=${encodeURIComponent(playerName)}`}>
            <button disabled={!playerName}>Começar o Quiz</button>
            </Link>
        
      </div>
    </div>
  );
};

export default StartPage;



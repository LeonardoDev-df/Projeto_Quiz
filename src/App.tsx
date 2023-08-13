import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './componets/StartPage'; // Importe o componente StartPage que você criou
import QuizPage from './componets/QuizPage'; // Importe o componente QuizPage que você criou
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="header">Projeto Quiz </header>
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
        <footer className="footer">Desenvolvido por Leonardo Lopes </footer>
      </div>
    </Router>
  );
}

export default App;



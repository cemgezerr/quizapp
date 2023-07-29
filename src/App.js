import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuesiton] = useState(0)


  const questions = [
    {
      text: "I see myself as a successful person.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },

      ],
    },
    {
      text: "I can control my excitement around other people.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can deal with difficulties in life.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to participate in social events.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can express myself comfortably.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to take responsibility.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I love myself.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
  ];

  return (
    <div className='App'>
      <div className='container'>
        <h1> Self Reliance App</h1>
        <h2> Current Score : {score}</h2>

        {
          setShowResults ?
            <div className='results'>
              <h1>Results</h1>
              <h2>1 out of 7self condifident</h2>
              <button>Restart Test</button>
            </div>
            :
            <div className='question-card'>
              <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
              <h3>{questions[currentQuestion].text}</h3>
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li key={option.id}>{option.text}</li>)
                })}
              </ul>
            </div>
        }

      </div>
    </div>
  )
}

export default App
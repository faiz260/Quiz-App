import React, { useState, useEffect } from "react";
import { QuestionType } from "./Types/types";
import "./App.css";
import { fetchQuizApi } from "./Services/api";
import { QuestionCard } from "./Components/QuestionCard";
import {GlobalStyles, Wrapper} from "./App.styles"

function App() {
  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showScore, setShowScore] = useState(false);


  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await fetchQuizApi(5, "easy");
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (
    e: React.FormEvent<EventTarget>,
    userAnswer: string
  ) => {
    e.preventDefault();

    const currentQuestion: QuestionType = quiz[currentStep];

    if (userAnswer === currentQuestion.answer) {
      setScore(++score);
    }

    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      setCurrentStep(0);
      setShowScore(true);
    }
  };
  console.log(score);

  if (!quiz.length) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
    <GlobalStyles/>
    <Wrapper>
      {showScore ? (
        <div className="score">
          Your Score is {score} / {quiz.length}
          <br />
          <button
            onClick={() => {
              setScore(0);
              setShowScore(false);
              window.location.reload(false);
            }}
            className="start-again"
          >
            Start Again
          </button>
        </div>
      ) : (
        <div>
          <h1>React Quiz</h1>
          <p className="ques-num" >Question Number {currentStep + 1}/ {quiz.length}  </p>
          <QuestionCard
            question={quiz[currentStep].question}
            options={quiz[currentStep].options}
            callback={handleSubmit}
          />
        </div>
      )}
    </Wrapper>
    </>
  );
}

export default App;

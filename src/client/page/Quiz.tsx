import React from "react"
import Option from "../components/Option"
import Title from "../components/Title"
import { useQuiz } from "../hooks/useQuiz"
import Summary from "./Summary"

export const Quiz = () => {
  const {
    currentQuestion,
    questions,
    onClickNext,
    correctAnswers,
    showSummary
  } = useQuiz()

  if (showSummary) return <Summary />

  return (
    <div>
      <Title>{currentQuestion.question}</Title>
      <Option question={currentQuestion} />
      <button onClick={onClickNext}>next</button>
      <h1>{correctAnswers}</h1>
    </div>
  )
}

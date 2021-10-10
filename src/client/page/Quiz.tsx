import React from "react"
import Button from "../components/Button"
import Option from "../components/Option"
import Title from "../components/Title"
import { useQuiz } from "../hooks/useQuiz"
import Summary from "./Summary"

const Quiz = () => {
  const {
    currentQuestion,
    onClickNext,
    correctAnswers,
    showSummary
  } = useQuiz()

  if (showSummary) return <Summary />

  return (
    <div>
      <Title>{currentQuestion.question}</Title>
      <Option question={currentQuestion} />
      <Button onClick={onClickNext}>next</Button>
      <h1>{correctAnswers}</h1>
    </div>
  )
}

export default Quiz

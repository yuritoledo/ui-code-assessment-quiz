import React from "react"
import Button from "../../components/Button"
import Option from "../../components/Option"
import Title from "../../components/Title"
import { useQuiz } from "../../hooks/useQuiz"
import Summary from "../Summary/Summary"

const Quiz = () => {
  const {
    currentQuestion,
    onClickNext,
    showSummary,
    questions
  } = useQuiz()

  if (showSummary) return <Summary />
  if (!questions.length) {
    return <p>aguarde ...</p>
  }
  return (
    <div>
      <Title value={currentQuestion.question} />
      <Option question={currentQuestion} />
      <Button type='button' onClick={onClickNext}>next</Button>
    </div>
  )
}

export default Quiz

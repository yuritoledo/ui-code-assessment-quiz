import React from 'react'
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import { useQuiz } from '../../hooks/useQuiz'
import Values from './Values'

const Summary = () => {
  const { correctAnswers, answeredQuestions, onClickRestart } = useQuiz()

  const wrongAnswers = answeredQuestions - correctAnswers

  const finalScore = correctAnswers / answeredQuestions * 100
  return (
    <div>
      <h1>Summary</h1>
      <Values label='Correct' value={correctAnswers} />
      <Values label='Wrong' value={wrongAnswers} />
      <Values label='Question answered' value={answeredQuestions} />
      <Values label='Final score' value={`${finalScore.toFixed(2)}%`} />
      <Spacer value={50} />
      <Button type='button' onClick={onClickRestart}>Restart Quiz</Button>
    </div>
  )
}

export default Summary

import React, { createContext, FC, useContext, useEffect, useState } from "react"
import { Question } from "../interfaces"
import { getQuestions } from "../services/api"

interface QuizContext {
  currentQuestion: Question
  questions: Question[]
  correctAnswers: number
  onClickNext(): void
  onPickOrTypeAnwser(value: string): void
}

const Context = createContext<QuizContext>({} as QuizContext)

export const useQuiz = () => useContext(Context)

export const QuizProvider: FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const currentQuestion = questions[index]

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getQuestions()
      if (!response) return null

      setQuestions(response.results)
    }

    fetchQuestions()
  }, [])

  const onClickNext = () => {
    setIndex(index + 1)
  }

  const onPickOrTypeAnwser = (userAnswer: string) => {
    if (currentQuestion.correct_answer !== userAnswer) return

    setCorrectAnswers(correctAnswers + 1)
  }

  const value = {
    currentQuestion,
    questions,
    onClickNext,
    onPickOrTypeAnwser,
    correctAnswers
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

import React, { createContext, FC, useContext, useEffect, useState } from "react"
import { Question } from "../interfaces"
import { getQuestions } from "../services/api"
import { shuffleList } from "../utils/helper"

interface QuizContext {
  currentQuestion: Question
  questions: Question[]
  correctAnswers: number
  answeredQuestions: number
  showSummary: boolean
  onClickNext(): void
  onPickOrTypeAnwser(value: string): void
  onClickRestart(): void
}

const Context = createContext<QuizContext>({} as QuizContext)

export const useQuiz = () => useContext(Context)

export const QuizProvider: FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  const currentQuestion = questions[index]

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getQuestions()
      if (!response) return null

      const filterred = response.results.filter((_, index) => index < 10)

      setQuestions(shuffleList(filterred))
    }

    fetchQuestions()
  }, [])

  const onClickNext = () => {
    setIndex(index + 1)
  }

  const onPickOrTypeAnwser = (userAnswer: string) => {
    setAnsweredQuestions(answeredQuestions + 1)

    if (currentQuestion.correct_answer === userAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    }
  }

  const onClickRestart = () => {
    const shuffleredQuestions = shuffleList(questions)
    setQuestions(shuffleredQuestions)
    setIndex(0)
  }


  const showSummary = index === questions.length

  const value = {
    currentQuestion,
    questions,
    onClickNext,
    onPickOrTypeAnwser,
    onClickRestart,
    correctAnswers,
    answeredQuestions,
    showSummary
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

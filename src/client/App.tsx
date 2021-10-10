import React from 'react'
import { QuizProvider } from "./hooks/useQuiz"
import { Quiz } from "./page/Quiz"

export const App = () => (
  <QuizProvider>
    <Quiz />
  </QuizProvider>
)

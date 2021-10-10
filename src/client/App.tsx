import React from 'react'
import AppContainer from './components/AppContainer'
import { QuizProvider } from "./hooks/useQuiz"
import Quiz from "./page/Quiz/Quiz"

export const App = () => (
  <AppContainer>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </AppContainer>
)

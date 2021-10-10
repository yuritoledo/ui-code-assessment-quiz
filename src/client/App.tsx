import React from 'react'
import styled from 'styled-components'
import { QuizProvider } from "./hooks/useQuiz"
import Quiz from "./page/Quiz"

const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
`

export const App = () => (
  <Container>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </Container>
)

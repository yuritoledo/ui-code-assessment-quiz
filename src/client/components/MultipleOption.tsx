import React, { ChangeEvent, FC, Fragment } from 'react'
import styled from 'styled-components'
import { Question } from '../interfaces'

const Container = styled.div`
  display: flex;
`

interface Props {
  onPickValue(value: string): void
  question: Question
}

const MultipleOptions: FC<Props> = (props) => {
  const { onPickValue, question } = props

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPickValue(event.target.value)
  }

  const commonProps = {
    name: 'booleanInput',
    type: 'radio',
    multiple: true,
  }

  const options = [
    ...question.incorrect_answers!,
    question.correct_answer
  ]

  return (
    <Container>
      {options.map(option => (
        <Fragment key={option}>
          <input
            {...commonProps}
            id={option}
            value={option}
            onChange={onChange}
          />
          <label htmlFor={option}>{option}</label>
        </Fragment>
      ))}
    </Container>
  )
}

export default MultipleOptions

import React, { ChangeEvent, FC, Fragment } from 'react'
import { Question } from '../interfaces'
import AnswerContainer from './AnswerContainer'
import RadioInput from './RadioInput'
import Label from './Label'


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
    <AnswerContainer>
      {options.map(option => (
        <div key={option}>
          <RadioInput
            {...commonProps}
            id={option}
            value={option}
            onChange={onChange}
          />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </AnswerContainer>
  )
}

export default MultipleOptions

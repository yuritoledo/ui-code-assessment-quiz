import React, { FC } from 'react'
import { useQuiz } from '../hooks/useQuiz'
import { Question } from '../interfaces'
import BooleanOption from './BooleanOption'
import InputOption from './InputOption'
import MultipleOption from './MultipleOption'

interface Props {
  question: Question
}

const Option: FC<Props> = ({ question }) => {
  const { onPickOrTypeAnwser } = useQuiz()

  switch (question.type) {
    case 'boolean':
      return <BooleanOption onPickValue={onPickOrTypeAnwser} />
    case 'multiple':
      return <MultipleOption question={question} onPickValue={onPickOrTypeAnwser} />
    default:
      return <InputOption onTypingValue={onPickOrTypeAnwser} />
  }
}

export default Option

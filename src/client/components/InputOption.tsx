import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import AnswerContainer from './AnswerContainer'

const Input = styled.input`
  width: 250px;
  font-size: 1em;
  padding-left: 5px;
  border: 1px solid lightgrey;
  padding: 8px;
`

interface Props {
  onTypingValue(value: string): void
}

const InputOption: FC<Props> = (props) => {

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onTypingValue(event.target.value)
  }

  return (
    <AnswerContainer>
      <Input onChange={onChange} />
    </AnswerContainer>
  )
}

export default InputOption

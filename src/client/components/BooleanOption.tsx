import React, { ChangeEvent, FC } from 'react'
import AnswerContainer from './AnswerContainer'
import RadioInput from './RadioInput'
import Label from './Label'

interface Props {
  onPickValue(value: string): void
}

const BooleanOption: FC<Props> = (props) => {

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onPickValue(event.target.value)
  }

  const commonProps = {
    name: 'booleanInput',
    type: 'radio'
  }

  return (
    <AnswerContainer>
      <div>
        <RadioInput
          {...commonProps}
          id='True'
          value='True'
          onChange={onChange}
        />
        <Label htmlFor='True'>True</Label>
      </div>

      <div>
        <RadioInput
          {...commonProps}
          id='False'
          value='False'
          onChange={onChange}
        />
        <Label htmlFor='False'>False</Label>
      </div>
    </AnswerContainer>
  )
}
export default BooleanOption

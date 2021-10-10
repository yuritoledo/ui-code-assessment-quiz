import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

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
    <Container>
      <input
        {...commonProps}
        id='True'
        value='True'
        onChange={onChange}
      />
      <label htmlFor='True'>True</label>

      <input
        {...commonProps}
        id='False'
        value='False'
        onChange={onChange}
      />
      <label htmlFor='False'>False</label>
    </Container>
  )
}
export default BooleanOption

import React, { ChangeEvent, FC, useState } from 'react'

interface Props {
  onTypingValue(value: string): void
}

const InputOption: FC<Props> = (props) => {

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onTypingValue(event.target.value)
  }

  return (
    <div>
      <input onChange={onChange} />
    </div>
  )
}

export default InputOption

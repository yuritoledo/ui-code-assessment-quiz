import React, { FC } from "react"
import styled from "styled-components"

const P = styled.p`
  margin: 5px 0;
`

interface Props {
  label: string
  value: string | number
}

const Value: FC<Props> = ({ label, value }) => {
  return (
    <P>{label}: <strong>{value}</strong></P>
  )
}

export default Value

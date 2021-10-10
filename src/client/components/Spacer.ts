import styled from "styled-components";

interface Props {
  value: number
}

const Spacer = styled.div<Props>`
  margin-top: ${p => p.value}px;
  margin-bottom: ${p => p.value}px;
`

export default Spacer

import React, { FC } from "react";
import { decodeHtmlCharCodes } from "../utils/helper";

interface Props {
  value: string
}

const Title: FC<Props> = ({ value }) => (
  <p>{decodeHtmlCharCodes(value)}</p>
)

export default Title

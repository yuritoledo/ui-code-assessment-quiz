import { Question } from "../interfaces";

export const shuffleList = (list: Question[]) => list
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

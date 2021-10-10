import { Question } from "../interfaces"

const API = 'http://localhost:4000/api/questions'

interface Result {
  results: Question[]
}

export const getQuestions = async (): Promise<Result | null> => {
  try {
    const response = await fetch(API)
    const data = await response.json()

    return data
  } catch (error) {
    return null
  }
}


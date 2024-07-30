export interface Quizz{
  id: number,
  name: string,
  code: string,
  question: number[]
}
export interface Question {
   id: number,
   content: string,
   marks: number,
   negativeMarks: number,
   options: Option[]
}
export interface Option {
   id: string,
   content: string,
   isCorrect: boolean
}
export interface QuizzResult {
  id?: number,
  quizzId: number,
  name: string,
  score?: number,
  percentage?: number,
  isCorrect?: number,
  unAttempt?: number,
  respone?: {
    questionId: number,
    answerOptionId: string
  } []
}

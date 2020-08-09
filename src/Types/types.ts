import React from "react";

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
}
export type QuestionType = {
    question: string
    answer: string
    options: string[]
}

export type QuestionPropTypes = {
    question: string
    options: string[]
    callback: (e:React.FormEvent<EventTarget>, ans: string) => void
}
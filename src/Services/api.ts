import { Quiz, QuestionType } from "../Types/types";

export const fetchQuizApi = async (amount: number, level: string): Promise<QuestionType[]> => {
    const api = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`);
    const {results} = await api.json();
    const data: QuestionType[] =  results.map((questionObj: Quiz)=>{
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            options: [...questionObj.incorrect_answers, questionObj.correct_answer]
        }
    })
    return data;
}
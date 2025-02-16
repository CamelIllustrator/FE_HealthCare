import React from 'react'
import { QuestionScaleItem } from './QuestionScaleItem'

export const QuestionScaleList = ({ questions = [], onAnswerChange }) => {
    return (
        <div className="flex flex-col gap-5">
            {questions.length > 0 ? questions.map((question, index) => (
                <QuestionScaleItem index={index} isRequired={question.is_required} question={question.question} questionId={question.id} key={question.id} onChange={onAnswerChange} options={question.options} />
            )) : <h1>No questions Yet</h1>}
        </div>
    )
}

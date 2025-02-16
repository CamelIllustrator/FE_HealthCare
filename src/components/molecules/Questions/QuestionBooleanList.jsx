import React from 'react'
import QuestionBooleanItem from './QuestionBooleanItem'

const QuestionBooleanList = ({ questions = [], onAnswerChange }) => {
    return (
        <div className="flex flex-col gap-5">
            {questions.length > 0 ? questions.map((question, index) => (
                <QuestionBooleanItem index={index} isRequired={question.is_required} question={question.question} questionId={question.id} key={question.id} onChange={onAnswerChange} />
            )) : <h1>No questions Yet</h1>}
        </div>
    )
}

export default QuestionBooleanList
import QuestionBooleanList from '@/components/molecules/Questions/QuestionBooleanList'
import React from 'react'

const FillBooleanQuestion = ({ questions = [], onAnswerChange }) => {
    return (
        <div>
            <QuestionBooleanList questions={questions} onAnswerChange={onAnswerChange} />
        </div>
    )
}

export default FillBooleanQuestion
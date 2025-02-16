import QuestionBooleanList from '@/components/molecules/Questions/QuestionBooleanList'
import { QuestionScaleItem } from '@/components/molecules/Questions/QuestionScaleItem'
import { QuestionScaleList } from '@/components/molecules/Questions/QuestionScaleList'
import React from 'react'

const FillQuestion = ({ questions = [], onAnswerChange, setAnswers }) => {

    const onScaleChange = (value) => {
        setAnswers(prevValue => {
            const index = prevValue.findIndex(item => item.questionId === value.questionId);
            if (index === -1) {
                return [
                    ...prevValue,
                    value
                ]
            }
            return prevValue.map(item => {
                if (item.questionId === value.questionId) {
                    return {
                        ...item,
                        ...value
                    }
                }
                return item
            })
        });
    }
    return (
        <div>
            {questions.length > 0 && questions[0].type === "BOOLEAN" && (
                <QuestionBooleanList questions={questions} onAnswerChange={onAnswerChange} />
            )}
            {questions.length > 0 && ['SCALE', 'MULTIPLE_CHOICE'].includes(questions[0].type) && (
                <QuestionScaleList onAnswerChange={onScaleChange} questions={questions} />
            )}

        </div>
    )
}

export default FillQuestion
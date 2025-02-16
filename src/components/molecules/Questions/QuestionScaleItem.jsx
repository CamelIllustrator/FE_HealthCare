import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export const QuestionScaleItem = ({ question, questionId, isRequired, index, onChange, options = [] }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span>{index + 1}.</span>
                <h1>{question}</h1>
            </div>
            <div>
                <RadioGroup onValueChange={(value) => onChange({
                    questionId,
                    scaleValue: value,
                    score: value
                })}
                    className="flex gap-10">
                    {options.length > 0 ? (
                        options.map((option, index) => (
                            <div className="flex gap-1">
                                <RadioGroupItem id={option.id} value={option.score} />
                                <Label htmlFor={option.id}>{option.title}</Label>
                            </div>
                        ))
                    ) : null}
                </RadioGroup>

            </div>

        </div>
    )
}
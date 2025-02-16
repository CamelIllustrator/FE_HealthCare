import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const QuestionBooleanItem = ({ question, questionId, isRequired, index, onChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span>{index + 1}.</span>
                <h1>{question}</h1>
            </div>
            <div>
                <RadioGroup onValueChange={(value) => onChange({
                    questionId,
                    booleanValue: value
                })}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={true} id="option-one" />
                        <Label htmlFor="option-one">Ya</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={false} id="option-two" />
                        <Label htmlFor="option-two">Tidak</Label>
                    </div>
                </RadioGroup>
            </div>

        </div>
    )
}

export default QuestionBooleanItem
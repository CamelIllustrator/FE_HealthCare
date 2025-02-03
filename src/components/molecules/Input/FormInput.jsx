import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const FormInputText = ({ name, title, value, onChange, placeholder }) => {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} className="text-slate-600">{title}</Label>
            <Input id={name} type="text" className="w-2/3 border-slate-400" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default FormInputText
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


const FormInputText = ({ name, title, value, onChange, placeholder, type = "text" }) => {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} className="text-slate-600">{title}</Label>
            {type === "textarea" ? (
                <Textarea placeholder={placeholder} id={name} className="w-2/3 border-slate-400" value={value} onChange={onChange} />
            ) : (
                <Input id={name} type={type} className="w-2/3 border-slate-400" placeholder={placeholder} value={value} onChange={onChange} />

            )}
        </div>
    )
}

export default FormInputText
import React from 'react'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectLabel,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
} from '@/components/ui/select'
import { MdOutlineArrowRight } from "react-icons/md";

const Question = (props) => {
    return (
        <div>
            <header className="flex items-center gap-2">
                <div className='flex items-center '>
                    <h1>Q.{props.index + 1}</h1>
                    <MdOutlineArrowRight className="size-6" />
                </div>
                <Input type="text" placeholder="Pertanyaan" {...props} />
                <Select onValueChange={(value) => console.log(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Pilih Tipe Jawaban" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup label="Pilihan">
                            <SelectItem value="boolean">Ya / Tidak</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </header>
        </div>
    )
}

export default Question
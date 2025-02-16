import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { MdOutlineArrowRight } from "react-icons/md";
import { Switch } from "@/components/ui/switch"
import Label from "@/components/atoms/Label";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";


export const Question = ({ index, question, isRequired, onChange, onRemove, selectValue, control }) => {
    const { append, fields, remove } = useFieldArray({
        control,
        name: `questions.${index}.options`
    })

    return (
        <div className="flex flex-col gap-5 bg-gradient-to-b from-white to-gray-100 p-4 rounded-xl shadow-md">
            <section className="flex items-center gap-2">
                <div className='flex items-center'>
                    <h1>Q.{index + 1}</h1>
                    <MdOutlineArrowRight className="size-6" />
                </div>
                <Input type="text" placeholder="Pertanyaan" value={question} onChange={({ target: { value } }) => onChange(`questions.${index}.question`, value)} />
                <Select value={selectValue} onValueChange={value => onChange(`questions.${index}.type`, value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Pilih Tipe Jawaban" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup label="Pilihan">
                            <SelectItem value="BOOLEAN">Ya / Tidak</SelectItem>
                            <SelectItem value="MULTIPLE_CHOICE">Pilihan Ganda</SelectItem>
                            <SelectItem value="SCALE">Rentang</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </section>
            {["MULTIPLE_CHOICE", "SCALE"].includes(selectValue) && (
                <section className="flex flex-col gap-2">
                    {fields.map((option, optionIndex) => (
                        <div className="flex flex-col gap-1" key={option.id}>
                            <Label htmlFor={`questions.${index}.options.${optionIndex}.title`} className="text-sm">Option</Label>
                            <div className="flex items-center gap-2">
                                <Input id={`questions.${index}.options.${optionIndex}.title`} type="text" placeholder="Pilihan Jawaban" {...control.register(`questions.${index}.options.${optionIndex}.title`)} />
                                <Input type="number" placeholder="Nilai Jawaban (isi 0 jika tidak ada nilai)" {...control.register(`questions.${index}.options.${optionIndex}.score`, { valueAsNumber: true })} />
                                <Button type="button" variant="ghost" className="bg-red-500 text-white" onClick={() => remove(index)}>
                                    <IoMdClose className="text-xl" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </section>
            )}
            <Separator />
            <div className="flex items-center gap-4">
                {["MULTIPLE_CHOICE", "SCALE"].includes(selectValue) && (
                    <Button type="button" variant="default" onClick={() => append({ title: "", score: 0 })}>
                        <Plus />
                        <h1>Option</h1>
                    </Button>
                )}

                <Label htmlFor="isRequired">Required</Label>
                <Switch id="isRequired" checked={isRequired} onCheckedChange={(value) => onChange(`questions.${index}.isRequired`, value)} />
                <div className="border w-full px-3 py-1 font-semibold rounded-lg">
                    <h1>This Field is {isRequired ? "Required" : "not Required"}</h1>
                </div>
                <Button type="button" variant="destructive" onClick={() => onRemove(index)}>
                    <MdDelete />
                    <span>Hapus</span>
                </Button>
            </div>
        </div>
    );
};

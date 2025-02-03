import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FormInputText from '@/components/molecules/Input/FormInput'


const ResidenceForm = ({ residenceStatus = "", setResidenceStatus = () => { } }) => {
    return (
        <div className="flex flex-col p-4 border rounded-xl mt-4 gap-4">
            <h1 className="mb-4 font-semibold text-2xl text-slate-600">Data Tempat Tinggal</h1>
            <div className="flex flex-col gap-2">
                <Label>Status Tempat Tinggal</Label>
                <Select onValueChange={status => setResidenceStatus(status)}>
                    <SelectTrigger className="w-2/3">
                        <SelectValue placeholder="Status tempat tinggal" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="OWN">Milik Sendiri</SelectItem>
                        <SelectItem value="RENT">Sewa / Kontrak</SelectItem>
                        <SelectItem value="OTHER">LAINNYA</SelectItem>
                    </SelectContent>
                </Select>
                {residenceStatus === "OTHER" && (
                    <Input type="text" placeholder="Status tempat tinggal" className="w-2/3" />
                )}

            </div>
            <FormInputText name={"address"} onChange={() => { }} title={"Alamat"} value={null} placeholder={"Masukkan alamat anda"} type='textarea' />
        </div>
    )
}

export default ResidenceForm
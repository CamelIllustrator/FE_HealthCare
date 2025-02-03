import React from 'react'
import { DatePickerInput } from '@/components/molecules/Input/DatePickerInput';
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FormInputText from '@/components/molecules/Input/FormInput'


const SelfInformationForm = ({ date, setDate, residenceStatus, setResidenceStatus }) => {
    return (
        <div className="flex flex-col p-4 border rounded-xl">
            <h1 className="mt-6 mb-4 font-semibold text-2xl text-slate-600 ">Data Diri</h1>
            <div className="flex flex-col gap-8">
                <FormInputText name={"fullName"} onChange={() => { }} title={"Nama Lengkap"} value={null} placeholder={"Masukkan nama lengkap anda"} />
                <div className="flex flex-col gap-2">
                    <Label>Tanggal Lahir</Label>
                    <DatePickerInput date={date} setDate={setDate} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Pendidikan</Label>
                    <Select>
                        <SelectTrigger className="w-2/3">
                            <SelectValue placeholder="Pendidikan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sd">SD</SelectItem>
                            <SelectItem value="smp">SMP</SelectItem>
                            <SelectItem value="sma">SMA</SelectItem>
                            <SelectItem value="s1">S1</SelectItem>
                            <SelectItem value="s2">S2</SelectItem>
                            <SelectItem value="s3">S3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Jenis Kelamin</Label>
                    <Select>
                        <SelectTrigger className="w-2/3">
                            <SelectValue placeholder="Jenis Kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="L">Laki Laki</SelectItem>
                            <SelectItem value="P">Perempuan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Hubungan</Label>
                    <Select>
                        <SelectTrigger className="w-2/3">
                            <SelectValue placeholder="Hubungan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="IBU">Ibu</SelectItem>
                            <SelectItem value="AYAH">Ayah</SelectItem>
                            <SelectItem value="ANAK">Anak  </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            </div>
        </div>
    )
}

export default SelfInformationForm
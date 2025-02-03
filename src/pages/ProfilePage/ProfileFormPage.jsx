import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import FormInputText from '@/components/molecules/Input/FormInput'
import { DatePickerInput } from '@/components/molecules/Input/DatePickerInput';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const ProfileFormPage = () => {
    const [date, setDate] = useState(new Date());
    const [residenceStatus, setResidenceStatus] = useState(null);
    const [formInputPayload, setFormInputPayload] = useState({});

    return (
        <div>
            <form className="bg-white p-6 rounded-xl">
                <Progress value={40} className="mb-4" />
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
                    </div>
                </div>

                <div className="flex flex-col p-4 border rounded-xl mt-4 gap-4">
                    <h1 className="mb-4 font-semibold text-2xl text-slate-600">Data Pekerjaan</h1>
                    <div className="flex flex-col gap-2">
                        <Label>Pekerjaan</Label>
                        <Select>
                            <SelectTrigger className="w-2/3">
                                <SelectValue placeholder="Pekerjaan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="TIDAK_BEKERJA_BURUH_SEJENISNYA">Tidak Bekerja / Buruh dan Sejenisnya</SelectItem>
                                <SelectItem value="PEKERJA_HONORER_KONTRAK">Pekerja Honorer / Kontrak</SelectItem>
                                <SelectItem value="PEGAWAI_NEGERI_KARYAWAN_SWASTA">Pegawai Negeri / Karyawan Swasta</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <FormInputText name={"gaji"} onChange={() => { }} title={"Gaji"} value={null} placeholder={"Masukkan gaji anda"} />
                </div>

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
                    <FormInputText name={"gaji"} onChange={() => { }} title={"Gaji"} value={null} placeholder={"Masukkan gaji anda"} />

                </div>
            </form>
        </div>
    )
}

export default ProfileFormPage
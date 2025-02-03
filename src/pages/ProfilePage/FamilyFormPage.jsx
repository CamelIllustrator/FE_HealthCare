import { DatePickerInput } from '@/components/molecules/Input/DatePickerInput';
import FormInputText from '@/components/molecules/Input/FormInput';
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FamilyFormPage = () => {
    return (
        <div className="flex flex-col p-4 border rounded-xl">
            <h1 className="mt-6 mb-4 font-semibold text-2xl text-slate-600 ">Data Diri</h1>
            <div className="flex flex-col gap-8">
                <FormInputText name={"fullName"} onChange={() => { }} title={"Nama Lengkap"} value={null} placeholder={"Masukkan nama lengkap anda"} />
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
    )
}

export default FamilyFormPage
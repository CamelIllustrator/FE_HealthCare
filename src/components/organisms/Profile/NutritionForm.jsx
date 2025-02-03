import React from 'react'
import FormInputText from '@/components/molecules/Input/FormInput'


const NutritionForm = () => {
    return (
        <div className="flex flex-col p-4 border rounded-xl">
            <h1 className="mt-6 mb-4 font-semibold text-2xl text-slate-600 ">Tinggi dan Berat Badan</h1>
            <div className="flex flex-col gap-8">
                <FormInputText name={"height"} onChange={() => { }} title={"Tinggi Badan (cm)"} value={null} placeholder={"Masukkan tinggi badan anda"} />
                <FormInputText name={"weight"} onChange={() => { }} title={"Berat Badan (kg)"} value={null} placeholder={"Masukkan berat badan anda"} />
            </div>
        </div>
    )
}

export default NutritionForm
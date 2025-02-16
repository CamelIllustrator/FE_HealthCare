import { CreateQuisionerTemplate } from '@/components/templates/CreateQuisionerTemplate'
import { createQuisioner } from '@/lib/api'
import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const CreateSchoolQuisionerPage = () => {
    const { stratification } = useParams();
    const [searchParam, setSearchParam] = useSearchParams();
    console.log(`${stratification}_${searchParam.get('s')}`)
    const navigate = useNavigate();
    const onSubmitHandler = async (values) => {
        const payload = {
            ...values,
            for: 'SCHOOL',
            stratification: `${stratification}_${searchParam.get('s')}`,
        }
        const { data } = await createQuisioner(payload)
        console.log(data)
        toast.success('Quisioner berhasil dibuat', {
            autoClose: 1500,
            onClose: () => {
                navigate("/dashboard/admin")
            }
        });
    }

    return (
        <div>
            <CreateQuisionerTemplate onSubmitHandler={onSubmitHandler} />
        </div>
    )
}

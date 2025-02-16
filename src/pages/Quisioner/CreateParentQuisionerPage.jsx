import { CreateQuisionerTemplate } from '@/components/templates/CreateQuisionerTemplate'
import { createQuisioner } from '@/lib/api'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const CreateParentQuisionerPage = () => {
    const navigate = useNavigate();
    const onSubmitHandler = async (values) => {
        const payload = {
            ...values,
            for: 'PARENT'
        }
        console.log({ payload });
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
            <CreateQuisionerTemplate onSubmitHandler={onSubmitHandler} forWho='PARENT' />
        </div>
    )
}

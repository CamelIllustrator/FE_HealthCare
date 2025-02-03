import React from 'react'
import { useState } from 'react'
import JobForm from '@/components/organisms/Profile/JobForm'
import SelfInformationForm from '@/components/organisms/Profile/SelfInformationForm'

import NutritionForm from '@/components/organisms/Profile/NutritionForm'
import ResidenceForm from '@/components/organisms/Profile/ResidenceForm'


const ProfileFormTemplate = ({ date, setDate, residenceStatus, setResidenceStatus }) => {
    return (
        <form className="bg-white p-6 rounded-xl flex gap-4">
            <div className='flex-1'>
                <SelfInformationForm date={date} residenceStatus={residenceStatus} setDate={setDate} setResidenceStatus={setResidenceStatus} />
                <JobForm />
            </div>
            <div className="flex-1">
                <NutritionForm />
                <ResidenceForm residenceStatus={residenceStatus} setResidenceStatus={setResidenceStatus} />
            </div>
        </form>
    )
}

export default ProfileFormTemplate
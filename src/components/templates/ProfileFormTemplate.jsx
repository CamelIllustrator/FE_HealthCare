import React from 'react'
import { useState } from 'react'
import JobForm from '@/components/organisms/Profile/JobForm'
import SelfInformationForm from '@/components/organisms/Profile/SelfInformationForm'

import NutritionForm from '@/components/organisms/Profile/NutritionForm'
import ResidenceForm from '@/components/organisms/Profile/ResidenceForm'


const ProfileFormTemplate = ({ profile, job, nutrition, residence, onInputChange, birthDate, setBirthDate }) => {

    return (
        <form className="bg-white p-6 rounded-xl flex gap-4">
            <div className='flex-1'>
                <SelfInformationForm date={birthDate} residenceStatus={''} setDate={setBirthDate} onInputChange={onInputChange} education={profile.education} fullName={profile.fullName} gender={profile.gender} relation={profile.relation} />
                <JobForm income={job.income} jobTypeId={job.jobTypeId} onInputChange={onInputChange} />
            </div>
            <div className="flex-1">
                <NutritionForm height={nutrition.height} isChildren={false} onInputChange={onInputChange} weight={nutrition.weight} />
                <ResidenceForm residenceStatus={residence.status} onInputChange={onInputChange} address={residence.address} description={residence.description} />
            </div>
        </form>
    )
}

export default ProfileFormTemplate
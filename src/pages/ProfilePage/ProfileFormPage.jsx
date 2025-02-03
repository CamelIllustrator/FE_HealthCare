import { useState } from 'react'
import JobForm from '@/components/organisms/Profile/JobForm'
import SelfInformationForm from '@/components/organisms/Profile/SelfInformationForm'

import NutritionForm from '@/components/organisms/Profile/NutritionForm'
import ResidenceForm from '@/components/organisms/Profile/ResidenceForm'
import ProfileFormTemplate from '@/components/templates/ProfileFormTemplate'



const ProfileFormPage = () => {
    const [date, setDate] = useState(new Date());
    const [residenceStatus, setResidenceStatus] = useState(null);

    return (
        <ProfileFormTemplate date={date} setDate={setDate} residenceStatus={residenceStatus} setResidenceStatus={setResidenceStatus} />
    )
}

export default ProfileFormPage
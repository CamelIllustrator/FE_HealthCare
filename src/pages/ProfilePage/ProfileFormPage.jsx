import { useState } from 'react'

import ProfileFormTemplate from '@/components/templates/ProfileFormTemplate'
const ProfileFormPage = () => {
    const [birthDate, setBirthDate] = useState(null);
    const [formInput, setFormInput] = useState({
        profile: {
            fullName: '',
            education: '',
            gender: '',
            relation: '',
        },
        job: {
            income: 0,
            jobTypeId: 1
        },
        residence: {
            status: '',
            address: '',
            description: ''
        },

        institutionId: 0,
        nutrition: {
            height: 0,
            weight: 0,
            birth_weight: 0,
        },
        behaviour: {
            eatFrequency: 0,
            drinkFrequency: 0,
            physicalActivity: 0,
            sleepQuality: 0,
            phbs: 0
        },
        knowledgeNutrition: {
            knowledge: '',
            score: 0
        }
    });

    const onInputChange = (key, value, parentKey = null) => {
        if (parentKey) {
            setFormInput(prevValue => ({
                ...prevValue,
                [parentKey]: {
                    ...prevValue[parentKey],
                    [key]: value
                }
            }))
        }

        setFormInput(prevValue => ({
            ...prevValue,
            [key]: value
        }))
    }

    console.log({ formInput })

    return (
        <ProfileFormTemplate onInputChange={onInputChange} residence={formInput.residence} job={formInput.job} nutrition={formInput.nutrition} profile={formInput.profile} birthDate={birthDate} setBirthDate={setBirthDate} />
    )
}

export default ProfileFormPage
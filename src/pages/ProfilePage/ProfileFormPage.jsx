import { useState } from 'react'
import { toast } from 'react-toastify';

import ProfileFormTemplate from '@/components/templates/ProfileFormTemplate'
import { useNavigate } from 'react-router-dom';
const ProfileFormPage = () => {
    const [birthDate, setBirthDate] = useState(JSON.parse(localStorage.getItem('formInput'))?.birthDate || null);
    const [formInput, setFormInput] = useState(JSON.parse(localStorage.getItem('formInput')) ?? {
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
    const navigate = useNavigate();

    const onSubmitProfileForm = (e, type = "PARENT") => {
        e.preventDefault();
        if (type === "PARENT") {
            handleSubmitParentForm(type);
        } else {
            handleSubmitInstitutionForm(type);
        }
    }

    const handleSubmitParentForm = (type = "PARENT") => {
        const test = { ...formInput, birthDate };
        localStorage.setItem('formInput', JSON.stringify(test));
        toast.success(`Form ${type} berhasil disimpan`, {
            autoClose: 1500,
            onClose: () => {
                navigate('/dashboard')
            }
        })
    }

    return (
        <ProfileFormTemplate onInputChange={onInputChange} residence={formInput.residence} job={formInput.job} nutrition={formInput.nutrition} profile={formInput.profile} birthDate={birthDate} setBirthDate={setBirthDate} onSubmit={onSubmitProfileForm} formFor='PARENT' birthWeight={formInput.nutrition.birth_weight} />
    )
}

export default ProfileFormPage
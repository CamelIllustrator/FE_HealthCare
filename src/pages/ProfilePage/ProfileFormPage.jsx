import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';

import ProfileFormTemplate from '@/components/templates/ProfileFormTemplate'
import { useNavigate } from 'react-router-dom';
import { useFamilyFormStore } from '@/store/form/FamilyFormStore';
const ProfileFormPage = ({ children }) => {
    // const [birthDate, setBirthDate] = useState(JSON.parse(localStorage.getItem('formInput'))?.birthDate || null);
    const { formInput, onInputChange, selfBirthDate: birthDate, setSelfBirthDate: setBirthDate } = useFamilyFormStore()
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
        toast.success(`Data berhasil disimpan`, {
            autoClose: 1500,
            onClose: () => {
                navigate('/dashboard')
            }
        })
    }

    return (
        <ProfileFormTemplate onInputChange={onInputChange} residence={formInput.residence} job={formInput.job} nutrition={formInput.nutrition} profile={formInput.profile} birthDate={birthDate} setBirthDate={setBirthDate} onSubmit={onSubmitProfileForm} formFor='PARENT' birthWeight={formInput.nutrition.birth_weight}>
            {children}
        </ProfileFormTemplate>
    )
}

export default ProfileFormPage
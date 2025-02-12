import DashboardProrgess from '@/components/organisms/Progress/DashboardProrgess';
import BasicTable from '@/components/organisms/Table/BasicTable';
import { Calendar } from "@/components/ui/calendar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { getFamilyMembersByHeadPhone } from '@/lib/api';
import { useFamilyFormStore } from '@/store/form/FamilyFormStore';
import { userStore } from '@/store/users/userStore';
import { useState, useEffect } from 'react';

export const ParentHomePage = () => {
    // const [familyMembers, setFamilyMembers] = useState([
    //     {
    //         name: 'Ripan Renaldi',
    //         relation: 'Ayah',
    //         job: 'Developer',
    //         height: 165,
    //         weight: 55,
    //         birthWeight: 3,
    //         nutritionStatus: 'Normal'
    //     },
    //     {
    //         name: 'Ripan Renaldi',
    //         relation: 'Ayah',
    //         job: 'Developer',
    //         height: 165,
    //         weight: 55,
    //         birthWeight: 3,
    //         nutritionStatus: 'Normal'
    //     },
    //     {
    //         name: 'Ripan Renaldi',
    //         relation: 'Ayah',
    //         job: 'Developer',
    //         height: 165,
    //         weight: 55,
    //         birthWeight: 3,
    //         nutritionStatus: 'Normal'
    //     }
    // ]);
    const { formInput, fatherFormInput } = useFamilyFormStore()
    const { familyMembers } = userStore()
    const [progressItems, setProgressItems] = useState(() => {
        const selfFormPageAnswered = [
            formInput.profile.fullName,
            formInput.residence.status,
            formInput.job.jobTypeId,
            formInput.nutrition.height
        ].filter(item => item).length

        const familyFormPageAnswered = [
            localStorage.getItem('selfFormPage'),
            localStorage.getItem('parentForm'),
            localStorage.getItem('childrenForm')
        ].filter(item => item).length
        return [
            {
                title: 'Data Diri',
                progress: Math.round((selfFormPageAnswered / 4) * 100),
                totalQuestion: 4,
                url: 'parent/profile/create',
                isFilled: localStorage.getItem('selfFormPage') === 'true',
                totalAnswered: selfFormPageAnswered
            },
            {
                title: 'Data Keluarga',
                progress: Math.round((familyFormPageAnswered / 3) * 100),
                totalQuestion: 3,
                totalAnswered: familyFormPageAnswered,
                url: 'parent/family/create',
                isFilled: localStorage.getItem('familyFormPage') === 'true'
            },
            {
                title: 'Quisioner Gizi',
                progress: 100,
                totalAnswered: 10,
                totalQuestion: 10,
                url: 'parent/quisioner/nutrition',
                isFilled: localStorage.getItem('nutritionQuisioner') === 'true'
            },
        ]
    })

    const [date, setDate] = useState(new Date());
    const [tooltipText, setTooltipText] = useState(null);
    const [monthChange, setMonthChange] = useState(null);

    // const specialDays = [
    //     {
    //         date: new Date(2025, 3, 14),
    //         name: "Valentine's Day",
    //     },
    //     {
    //         date: new Date(2025, 1, 14),
    //         name: "Valentine's Day3",
    //     },
    //     {
    //         date: new Date(2025, 2, 14),
    //         name: "Valentine's Day2",
    //     },
    //     {
    //         date: new Date(2025, 1, 17),
    //         name: "Makan siang bersama",
    //     },
    // ];

    const handleDayHover = (day) => {
        const specialDay = specialDays.find(
            (special) =>
                special.date.toDateString() === day.toDateString()
        );
        if (specialDay) {
            setTooltipText(specialDay.name);
            setMonthChange(true);
        } else {
            setTooltipText(null);
            setMonthChange(false);
        }
    };

    const format = {
        headers: [
            { alias: "Nama Lengkap", name: "full_name" },
            { alias: "Relasi", name: "relation" },
            { alias: "Pekerjaan", name: "job.job_type.name" },
            { alias: "Tinggi Badan (cm)", name: "nutrition[0].height" },
            { alias: "Berat Badan (kg)", name: "nutrition[0].weight" },
            { alias: "Berat Badan Lahir (kg)", name: "nutrition[0].birth_weight" },
            { alias: "Status Gizi", name: "nutrition[0].nutrition_status.status" },
        ]
    }

    useEffect(() => {
        async function fetchFamilyMembersData() {
            if (formInput.profile.relation === 'AYAH') {
                const { data } = await getFamilyMembersByHeadPhone(formInput.profile.phoneNumber)
                userStore.setState({ familyMembers: data });
                return;
            }
            const { data } = await getFamilyMembersByHeadPhone(fatherFormInput.profile.phoneNumber);
            userStore.setState({ familyMembers: data });
            return;
        }

        fetchFamilyMembersData();
    }, [])
    console.log({ familyMembers });

    return (
        <article className="w-full">
            <section>
                <div className="flex gap-5 justify-between w-full">
                    <DashboardProrgess progressItems={progressItems} />
                    <div className="bg-white w-min rounded-xl h-min ">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border w-min w-full"
                                        onDayMouseEnter={handleDayHover}
                                        onMonthChange={() => {
                                            setMonthChange(true);
                                        }}
                                    // modifiers={{
                                    //     special: specialDays.map((day) => day.date),
                                    // }}
                                    // modifiersClassNames={{
                                    //     special: "bg-red-500 text-white rounded-full",
                                    // }}
                                    />
                                    {tooltipText && monthChange && (
                                        <TooltipContent className="bg-black text-white p-2 rounded-md text-sm">
                                            {tooltipText}
                                        </TooltipContent>
                                    )}
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <BasicTable caption={'Informasi Keluarga'} data={familyMembers.length > 0 ? familyMembers : []} format={format} title={'Tabel Keluarga'} />
            </section>
        </article>
    )
};
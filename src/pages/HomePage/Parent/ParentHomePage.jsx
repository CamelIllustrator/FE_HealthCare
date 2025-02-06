import DashboardProrgess from '@/components/organisms/Progress/DashboardProrgess';
import BasicTable from '@/components/organisms/Table/BasicTable';
import { Calendar } from "@/components/ui/calendar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from 'react';

export const ParentHomePage = () => {
    const [familyMembers, setFamilyMembers] = useState([
        {
            name: 'Ripan Renaldi',
            relation: 'Ayah',
            job: 'Developer',
            height: 165,
            weight: 55,
            birthWeight: 3,
            nutritionStatus: 'Normal'
        },
        {
            name: 'Ripan Renaldi',
            relation: 'Ayah',
            job: 'Developer',
            height: 165,
            weight: 55,
            birthWeight: 3,
            nutritionStatus: 'Normal'
        },
        {
            name: 'Ripan Renaldi',
            relation: 'Ayah',
            job: 'Developer',
            height: 165,
            weight: 55,
            birthWeight: 3,
            nutritionStatus: 'Normal'
        }
    ]);
    const progressItems = [
        {
            title: 'Data Diri',
            progress: 100,
            totalAnswered: 10,
            totalQuestion: 10,
            url: 'parent/profile/create'
        },
        {
            title: 'Data Keluarga',
            progress: 100,
            totalAnswered: 10,
            totalQuestion: 10,
            url: 'parent/family/create'
        },
        {
            title: 'Quisioner Gizi',
            progress: 100,
            totalAnswered: 10,
            totalQuestion: 10,
            url: ''
        },
    ]
    const [date, setDate] = useState(new Date());
    const [tooltipText, setTooltipText] = useState(null);
    const [monthChange, setMonthChange] = useState(null);

    const specialDays = [
        {
            date: new Date(2025, 3, 14),
            name: "Valentine's Day",
        },
        {
            date: new Date(2025, 1, 14),
            name: "Valentine's Day3",
        },
        {
            date: new Date(2025, 2, 14),
            name: "Valentine's Day2",
        },
        {
            date: new Date(2025, 1, 17),
            name: "Makan siang bersama",
        },
    ];

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
            { name: "Nama" },
            { name: "Relasi" },
            { name: "Pekerjaan" },
            { name: "Tinggi Badan (cm)" },
            { name: "Berat Badan (kg)" },
            { name: "Berat Badan Lahir (kg)" },
            { name: "Status Gizi" },
        ],
    }

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
                                        modifiers={{
                                            special: specialDays.map((day) => day.date),
                                        }}
                                        modifiersClassNames={{
                                            special: "bg-red-500 text-white rounded-full",
                                        }}
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
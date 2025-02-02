import DashboardProrgess from '@/components/organisms/Progress/DashboardProrgess';
import React, { useState, useMemo } from 'react';
import { Calendar } from "@/components/ui/calendar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"




export const ParentHomePage = () => {
    const progressItems = [
        {
            title: 'Data Diri',
            progress: 100,
            totalAnswered: 10,
            totalQuestion: 10,
            url: ''
        },
        {
            title: 'Data Nutrisi',
            progress: 100,
            totalAnswered: 10,
            totalQuestion: 10,
            url: ''
        },
        {
            title: 'Struktur Keluarga',
            progress: 100,
            totalAnswered: 10,
            totalQuestion: 10,
            url: ''
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

    const handleMonthChange = (test) => {
        setTooltipText(null);
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
                <div className="w-full bg-white mt-6 rounded-xl p-4">
                    <h1>Table</h1>
                    <Table>
                        <TableCaption>Informasi Keluarga</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Nama</TableHead>
                                <TableHead className="w-[100px]">Relasi</TableHead>
                                <TableHead>Pekerjaan</TableHead>
                                <TableHead>Tinggi Badan (cm)</TableHead>
                                <TableHead>Berat Badan (kg)</TableHead>
                                <TableHead>Berat Badan Lahir (kg)</TableHead>
                                <TableHead>Status Gizi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Ripan Renaldi</TableCell>
                                <TableCell>Ayah</TableCell>
                                <TableCell>Developer</TableCell>
                                <TableCell>165</TableCell>
                                <TableCell>55</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>Normal</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Ripan Renaldi</TableCell>
                                <TableCell>Ayah</TableCell>
                                <TableCell>Developer</TableCell>
                                <TableCell>165</TableCell>
                                <TableCell>55</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>Normal</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Ripan Renaldi</TableCell>
                                <TableCell>Ayah</TableCell>
                                <TableCell>Developer</TableCell>
                                <TableCell>165</TableCell>
                                <TableCell>55</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>Normal</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Ripan Renaldi</TableCell>
                                <TableCell>Ayah</TableCell>
                                <TableCell>Developer</TableCell>
                                <TableCell>165</TableCell>
                                <TableCell>55</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>Normal</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </section>
        </article>
    )
};
import React, { useState, useEffect } from 'react';
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import axios from "axios"

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
        id: 1
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
        id: 2
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
        id: 3
    },
    {
        value: "remix",
        label: "Remix",
        id: 4
    },
    {
        value: "astro",
        label: "Astro",
        id: 5
    },
]

import { Label } from "@/components/ui/label"

export function SchoolCombobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState()
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const getAllSchools = async () => {
            const response = await axios.get('http://localhost:5000/institutions/schools', {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM4ODMxMTYwLCJleHAiOjE3Mzg4NDE5NjB9.AXMKJf2WVLPbDwqOeYCQTr8brmzFD1eGTR7Z-K4NJR8`
                }
            })
            const { data } = response.data;
            setSchools(data);
        }

        getAllSchools();
    }, [])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value || "Pilih Sekolah"}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Sekolah Tidak Ditemukan</CommandEmpty>
                        <CommandGroup>
                            {schools.map((school) => (
                                <CommandItem
                                    key={school.id}
                                    value={school.name}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {school.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === school.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

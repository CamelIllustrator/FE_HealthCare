import React from 'react'
import ProfileInfo from '@/components/molecules/Info/ProfileInfo'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const PersonalInformation = () => {
    return (
        <div className="mt-6 border p-4 rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold">Personal Information</h1>
                <Button variant="outline" asChild>
                    <Link to="">Edit</Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 mt-4">
                <div className="flex flex-col gap-6">
                    <ProfileInfo label={"Full Name"} value={"Ripan Renaldi"} />

                    <ProfileInfo label={"Email Address"} value={"ripanrenaldi25@gmail.com"} />

                    <ProfileInfo label={"Email Address"} value={"ripanrenaldi25@gmail.com"} />

                    <ProfileInfo label={"Birth Date"} value={"25 April 2002"} />
                </div>
                <div className="flex flex-col gap-6">
                    <ProfileInfo label={"Gender"} value={"Male"} />
                    <ProfileInfo label={"Relation"} value={"Ayah"} />
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation
import ProfileFormTemplate from '@/components/templates/ProfileFormTemplate';
import { Button } from "@/components/ui/button";
import { useFamilyFormStore } from '@/store/form/FamilyFormStore';
import { useState } from 'react';
import { FaHeadSideCough } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { useSearchParams } from 'react-router-dom';
import ProfileFormPage from './ProfileFormPage';
import { AiOutlinePlus } from "react-icons/ai";

const FamilyFormPage = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(searchParam.get("page") ?? "");
    const { onInputChange, fatherFormInput, fatherBirthDate, setFatherBirthDate, childrenFormInput, addChildren, onChildrenInputForm } = useFamilyFormStore()

    const handleFatherInputChange = (key, value, parentKey = null) => {
        onInputChange(key, value, parentKey, "fatherFormInput")
    }

    const dataToAdd = {
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
        },
        birthDate: null
    }

    console.log({ childrenFormInput })

    return (
        <>
            <article className="flex flex-col p-4 border rounded-xl bg-white relative">
                <header className="sticky top-3">
                    <section className="flex gap-4 border w-min mx-auto flex justify-center items-center bg-gray-200 rounded-xl overflow-hidden py-1 px-2">
                        <Button variant="ghost" onClick={() => {
                            setCurrentPage("")
                            setSearchParam({ page: "" })
                        }} className={`border px-5 rounded-md ${currentPage === "" && "bg-white"}`}><MdPeopleAlt />Data Diri</Button>
                        <Button variant="ghost" onClick={() => {
                            setCurrentPage("father")
                            setSearchParam({ page: "father" })
                        }} className={`border px-5 rounded-md ${currentPage === "father" && "bg-white"}`}><FaHeadSideCough />Data Ayah</Button>
                        <Button variant="ghost" onClick={() => {
                            setCurrentPage("children")
                            setSearchParam({ page: "children" })
                        }} className={`border px-5 rounded-md ${currentPage === "children" && "bg-white"}`}><TbMoodKid />Data Anak</Button>
                    </section>
                </header>
                <section>
                    {currentPage === "" && (
                        <ProfileFormPage>
                            <Button onClick={() => setCurrentPage("father")} className="w-1/3">Lanjut</Button>
                        </ProfileFormPage>
                    )}
                    {currentPage === "father" && (
                        <ProfileFormTemplate
                            profile={fatherFormInput.profile}
                            job={fatherFormInput.job}
                            nutrition={fatherFormInput.nutrition}
                            residence={fatherFormInput.residence}
                            onInputChange={handleFatherInputChange}
                            birthDate={fatherBirthDate}
                            setBirthDate={setFatherBirthDate}
                            birthWeight={fatherFormInput.nutrition.birth_weight}
                            formFor="PARENT">
                            <Button onClick={() => {
                                console.log({ fatherFormInput })
                                setCurrentPage("children")

                            }} className="w-1/3">Lanjut</Button>
                        </ProfileFormTemplate>
                    )}
                    {currentPage === "children" && (
                        <section className="p-4">
                            <div className="mt-4 flex justify-between items-center">
                                <h1>Data Anak</h1>
                                <Button onClick={() => addChildren(dataToAdd)}><AiOutlinePlus />Tambah</Button>
                            </div>
                            {childrenFormInput.length > 0 ? childrenFormInput.map((child, index) => {
                                console.log({ child, index })
                                return (
                                    <div div key={index}>
                                        <ProfileFormTemplate
                                            profile={child.profile}
                                            job={child.job}
                                            nutrition={child.nutrition}
                                            residence={child.residence}
                                            onInputChange={(key, value, parentKey = null) => onChildrenInputForm(key, value, parentKey, index)}
                                            birthDate={child.birthDate}
                                            setBirthDate={(value) => onInputChange("birthDate", value, index, "childrenFormInput")}
                                            birthWeight={child.nutrition.birth_weight}
                                            formFor="CHILDREN"
                                        />
                                    </div>

                                )
                            }) : null}
                        </section>
                    )}
                </section>
            </article >
        </>
    )
}

export default FamilyFormPage
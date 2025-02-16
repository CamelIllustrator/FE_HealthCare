import BasicCardList from '@/components/organisms/Card/BasicCard/BasicCardList';
import { MultipleLineCart } from '@/components/organisms/Cart/MultipleLineCart';
import { DropdownQuisioner } from '@/components/organisms/Dropdown/DropdownQuisioner';
import BasicTable from '@/components/organisms/Table/BasicTable';
import { TableCell, TableRow } from '@/components/ui/table';
import { getAllQuisioners, getAllResponses, getUsers } from '@/lib/api';
import { useEffect, useState } from 'react';
import { LuShieldQuestion } from "react-icons/lu";
import { MdHealthAndSafety } from "react-icons/md";
import { SiAnswer } from "react-icons/si";
import { MdOutlineQuestionMark } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";

const QuisionerPage = () => {
    const [users, setUsers] = useState([]);
    const [quisioners, setQuisioners] = useState({});
    const [responses, setResponses] = useState({});
    const [schoolQuisioners, setSchoolQuisioners] = useState({});
    const [schoolResponses, setSchoolResponses] = useState({});
    const [basicCards, setBasicCards] = useState([
        {
            title: "Quisioner",
            description: 'Responses',
            totalAll: quisioners.count ?? 0,
            totalDone: responses.count ?? 0,
            subcards: [
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Quisioner"
                },
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Responses"
                },
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Responses"
                },
            ]
        },
        {
            title: "Quisioner",
            description: 'Responses',
            totalAll: 100,
            totalDone: 30,
            subcards: [
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Quisioner"
                },
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Responses"
                },
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Responses"
                },
                {
                    Icon: MdHealthAndSafety,
                    total: 25,
                    title: "Responses"
                },
            ]
        }
    ])
    const format = {
        headers: [
            {
                alias: 'Username',
                name: 'username'
            },
            {
                alias: 'Email',
                name: 'email'
            },
            {
                alias: 'Role',
                name: 'role'
            },
        ]
    }

    useEffect(() => {
        async function fetchUserData() {
            const { data } = await getUsers();
            setUsers(data);
        }
        async function fetchQuisionerData(setState, forWho) {
            const { data } = await getAllQuisioners(forWho);
            setState(data);
        }
        async function fetchResponseData(setState, forWho) {
            const { data } = await getAllResponses(forWho);
            setState(data);
        }
        Promise.all([
            fetchUserData(),
            fetchQuisionerData(setQuisioners, "PARENT"),
            fetchQuisionerData(setSchoolQuisioners, "SCHOOL"),
            fetchResponseData(setResponses, "PARENT"),
            fetchResponseData(setSchoolResponses, "SCHOOL"),
        ])
    }, [])
    useEffect(() => {
        setBasicCards([
            {
                title: "Parent Quisioner Information",
                // description: 'Responses',
                totalAll: quisioners.count ?? 0,
                totalDone: responses.count ?? 0,
                subcards: [
                    {
                        Icon: MdOutlineQuestionMark,
                        total: quisioners.count ?? 0,
                        title: "Quisioner"
                    },
                    {
                        Icon: RiQuestionAnswerLine,
                        total: responses.count ?? 0,
                        title: "Responses"
                    }
                ]
            },
            {
                title: "Schools Quisioner Information",
                // description: 'Responses',
                totalAll: schoolQuisioners.count ?? 0,
                totalDone: schoolResponses.count ?? 0,
                subcards: [
                    {
                        Icon: MdOutlineQuestionMark,
                        total: schoolQuisioners.count ?? 0,
                        title: "Quisioner"
                    },
                    {
                        Icon: RiQuestionAnswerLine,
                        total: schoolResponses.count ?? 0,
                        title: "Responses"
                    }
                ]
            }
        ]);
    }, [quisioners, responses]);

    return (
        <section className="flex flex-col gap-4">
            <header className="bg-white p-4 rounded-xl">
                <div className="flex justify-between items-center">
                    <h1>Quisioner</h1>
                    <DropdownQuisioner />
                </div>
                <div className="mt-3">
                    <BasicCardList basicCards={basicCards} />
                </div>
            </header>
            <div>
                <MultipleLineCart />
            </div>
            <div>
                <BasicTable title={"Data Pengguna"} caption={"Informasi pengguna"} data={users} format={format}>
                    {
                        users.length ? users.map((row, index) => (
                            <TableRow key={index}>
                                {format.headers.map((header, index) => (
                                    <TableCell key={index}>
                                        {header.name === "role" ? (
                                            row[header.name].name
                                        ) : (
                                            row[header.name]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                            : (
                                <TableRow>
                                    <TableCell colSpan={format.headers.length ?? 5} className="text-center mt-8 font-semibold ">Tidak Ada Data, Isi Pengguna terlebih dahulu</TableCell>
                                </TableRow>
                            )
                    }
                </BasicTable>
            </div>
        </section>
    )
}

export default QuisionerPage
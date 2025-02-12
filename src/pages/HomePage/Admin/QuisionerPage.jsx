import BasicCard from '@/components/organisms/Card/BasicCard/BasicCard'
import BasicCardList from '@/components/organisms/Card/BasicCard/BasicCardList'
import { MultipleLineCart } from '@/components/organisms/Cart/MultipleLineCart';
import { DropdownQuisioner } from '@/components/organisms/Dropdown/DropdownQuisioner'
import BasicTable from '@/components/organisms/Table/BasicTable';
import { TableCell, TableRow } from '@/components/ui/table';
import { getUsers } from '@/lib/api';
import React, { useEffect, useState } from 'react'
import { MdHealthAndSafety } from "react-icons/md";

const QuisionerPage = () => {
    const [users, setUsers] = useState([]);
    const [basicCards, setBasicCards] = useState([
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
            const response = await getUsers();
            setUsers(response.data);
        }
        fetchUserData();
    }, [])
    console.log({ users });
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
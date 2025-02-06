import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const BasicTable = ({ title, caption, format, data }) => {
    return (
        <div className="w-full bg-white mt-6 rounded-xl p-4">
            <h1 className="mb-2">{title}</h1>
            <Table>
                <TableCaption>{caption}</TableCaption>
                <TableHeader>
                    <TableRow>
                        {format.headers.map((header, index) => (
                            <TableHead key={index}>{header.name}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length ? data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.relation}</TableCell>
                            <TableCell>{row.job}</TableCell>
                            <TableCell>{row.height}</TableCell>
                            <TableCell>{row.weight}</TableCell>
                            <TableCell>{row.birthWeight}</TableCell>
                            <TableCell>{row.nutritionStatus}</TableCell>
                        </TableRow>

                    )) : (
                        <TableRow>
                            <TableCell colSpan={format.headers.length ?? 5} className="text-center mt-8 font-semibold ">Tidak Ada Data, Isi data keluarga terlebih dahulu</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </div>
    )
}

export default BasicTable
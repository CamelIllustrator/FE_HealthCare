import {
    Plus,
    UserPlus
} from "lucide-react";
import { AiFillEnvironment } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdCastForEducation, MdOutlineHealthAndSafety } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoMdNutrition } from "react-icons/io";
import { FiActivity } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


export function DropdownQuisioner() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-gradient-to-tr from-admprimary to-admsecondary text-white">
                    <Plus />
                    Create
                    <span><IoIosArrowDown /></span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Quisioner</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <UserPlus />
                            <span>Sekolah</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <MdCastForEducation />
                                        <h1>Pelaksanaan Pendidikan Kesehatan</h1>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_EDUCATION?s=MINIMAL"} asChild>
                                                    Minimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_EDUCATION?s=STANDAR"} asChild>
                                                    Standar
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_EDUCATION?s=OPTIMAL"} asChild>
                                                    Optimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_EDUCATION?s=PARIPURNA"} asChild>
                                                    Paripurna
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <RiHealthBookFill />
                                        <h1>
                                            Pelaksanaan Pelayanan Kesehatan
                                        </h1>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_SERVICE?s=MINIMAL"} asChild>
                                                    Minimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_SERVICE?s=STANDAR"} asChild>
                                                    Standar
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_SERVICE?s=OPTIMAL"} asChild>
                                                    Optimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/HEALTH_SERVICE?s=PARIPURNA"} asChild>
                                                    Paripurna
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <AiFillEnvironment />
                                        <h1>
                                            Lingkungan Sekolah Sehat
                                        </h1>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/SCHOOL_ENVIRONMENT?s=MINIMAL"} asChild>
                                                    Minimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/SCHOOL_ENVIRONMENT?s=STANDAR"} asChild>
                                                    Standar
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/SCHOOL_ENVIRONMENT?s=OPTIMAL"} asChild>
                                                    Optimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/SCHOOL_ENVIRONMENT?s=PARIPURNA"} asChild>
                                                    Paripurna
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <MdOutlineHealthAndSafety />
                                        <h1>
                                            Manajemen UKS
                                        </h1>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/UKS_MANAGEMENT?s=MINIMAL"} asChild>
                                                    Minimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/UKS_MANAGEMENT?s=STANDAR"} asChild>
                                                    Standar
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/UKS_MANAGEMENT?s=OPTIMAL"} asChild>
                                                    Optimal
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to={"quisioner/create/schools/UKS_MANAGEMENT?s=PARIPURNA"} asChild>
                                                    Paripurna
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Plus />
                            <span>Orang Tua</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <IoMdNutrition />
                                    <Link to={"quisioner/create/parents"} asChild>
                                        Pengetahuan Tentang Gizi
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FiActivity />
                                    <Link to={"quisioner/create/parents"} asChild>
                                        Perilaku Anak
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem>
                    <Link to={"quisioner/create"}>
                        <h1>Buat Quisioner</h1>
                    </Link>
                </DropdownMenuItem> */}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

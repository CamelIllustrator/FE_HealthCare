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
                                <DropdownMenuItem>
                                    <MdCastForEducation />
                                    <Link to={"quisioner/create/health-education"} asChild>
                                        Pelaksanaan Pendidikan Kesehatan
                                    </Link>
                                    <span></span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <RiHealthBookFill />
                                    <Link to={"quisioner/create/health-service"} asChild>
                                        Pelaksanaan Pelayanan Kesehatan
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <AiFillEnvironment />
                                    <Link to={"quisioner/create/school-environment"} asChild>
                                        Lingkungan Sekolah Sehat
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MdOutlineHealthAndSafety />
                                    <Link to={"quisioner/create/uks-management"} asChild>
                                        Manajemen UKS
                                    </Link>
                                </DropdownMenuItem>
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
                                    <Link to={"quisioner/create/nutrition"} asChild>
                                        Pengetahuan Tentang Gizi
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FiActivity />
                                    <Link to={"quisioner/create/behaviour"} asChild>
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

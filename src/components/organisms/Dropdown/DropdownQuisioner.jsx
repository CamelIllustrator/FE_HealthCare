import {
    MessageSquare,
    Plus,
    UserPlus
} from "lucide-react";
import { AiFillEnvironment } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";


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
                                    <span>Pelaksanaan Pendidikan Kesehatan</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <RiHealthBookFill />
                                    <span>Pelaksanaan Pelayanan Kesehatan</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <AiFillEnvironment />
                                    <span>Lingkungan Sekolah Sehat</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MdOutlineHealthAndSafety />
                                    <span>Manajemen UKS</span>
                                </DropdownMenuItem>
                                {/* <DropdownMenuSeparator /> */}
                                {/* <DropdownMenuItem>
                                    <PlusCircle />
                                    <span>More...</span>
                                </DropdownMenuItem> */}
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <Plus />
                        <span>Orang Tua</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <h1>Buat</h1>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

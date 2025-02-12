import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { IoIosHome } from "react-icons/io";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-10">
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <p className="text-lg text-slate-600 font-semibold">Sorry, we couldn't find the page you're looking for</p>
            <div className="flex gap-6 items-center justify-center mt-4 text-purple-600 font-semibold">
                <Link onClick={() => navigate(-1)} className="flex items-center gap-1 justify-center p-2 ">
                    <span><IoMdArrowBack /></span>
                    Go Back
                </Link>
                <Link to={"/dashboard"} className="flex items-center gap-1 justify-center border p-2 bg-purple-600 text-white rounded-lg">
                    <span><IoIosHome /></span>
                    Back To Dashboard
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
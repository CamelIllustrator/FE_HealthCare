import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';


const ProgressItems = ({ progress, totalAnswered, totalQuestion, title, url }) => {
    return (
        <Link className="bg-gray-100 flex-1 rounded-xl relative" to={url}>
            <div className="p-4 rounded-xl flex items-center gap-4">
                <div className="max-h-16 max-w-16">
                    <CircularProgressbar value={progress} text={`${progress}%`} className='text-white font-bold' />
                </div>
                <div>{title}</div>
                <div className="absolute bottom-2 right-3">{totalAnswered}/{totalQuestion}</div>
            </div>
        </Link>
    )
}

export default ProgressItems
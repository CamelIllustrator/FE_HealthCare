import React from 'react'
import SubcardList from './SubcardList';


const BasicCard = ({ title = "Information", totalDone = null, totalAll = null, description, subcards = [] }) => {
    return (
        <div className="bg-gradient-to-r from-admprimary to-admsecondary text-white p-4 rounded-xl max-w-1/3">
            <h1 className="font-semibold text-lg">{title}</h1>
            <div className="flex gap-2 items-end">
                {totalAll && totalDone ? (
                    <h1>{totalDone} | {totalAll}</h1>
                ) : (
                    <h1>{totalAll}</h1>
                )}
                <p className="text-[.7rem]">{description}</p>
            </div>
            <SubcardList subcards={subcards} />
        </div>
    )
}

export default BasicCard
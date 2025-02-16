import React from 'react'
import SubCard from './SubCard'

const SubcardList = ({ subcards = [] }) => {
    return (
        <div className="mt-4 flex gap-4">
            {subcards.map((subcard, index) => (
                <SubCard Icon={subcard.Icon} title={subcard.title} total={subcard.total} key={index} />
            ))}
        </div>
    )
}

export default SubcardList
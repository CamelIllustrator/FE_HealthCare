import React from 'react'
import BasicCard from './BasicCard'

const BasicCardList = ({ basicCards = [] }) => {
    return (
        <div className="flex gap-4 flex-wrap">
            {basicCards.map((basicCard, index) => (
                <BasicCard title={basicCard.title} description={basicCard.description} totalAll={basicCard.totalAll} totalDone={basicCard.totalDone} key={index} subcards={basicCard.subcards} />
            ))}
        </div>
    )
}

export default BasicCardList
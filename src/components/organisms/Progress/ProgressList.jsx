import React from 'react'
import ProgressItems from './ProgressItems'

const ProgressList = ({ progressItems }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                progressItems.map((item) => (
                    <ProgressItems progress={item.progress} title={item.title} totalAnswered={item.totalAnswered} totalQuestion={item.totalQuestion} url={item.url} key={item.url} />
                ))
            }
        </div>
    )
}

export default ProgressList
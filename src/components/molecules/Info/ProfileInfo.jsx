import React from 'react'

const ProfileInfo = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-slate-500">{label}</label>
            <h1>{value}</h1>
        </div>
    )
}

export default ProfileInfo
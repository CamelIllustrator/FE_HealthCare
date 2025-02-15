const SubCard = ({ Icon, total = 25, title = "Tasks" }) => {
    return (
        <div className="flex flex-col items-center bg-adm2 text-black p-2 rounded-md text-white text-sm">
            <Icon className="size-8" />
            <h1>{total}</h1>
            <p>{title}</p>
        </div>
    )
}

export default SubCard
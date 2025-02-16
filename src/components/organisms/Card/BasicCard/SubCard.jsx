const SubCard = ({ Icon, total = 25, title = "Tasks" }) => {
    return (
        <div className="flex flex-col items-center bg-adm2 text-black p-2 rounded-md text-white text-sm gap-1.5">
            <Icon className="size-6" />
            <h1>{total ?? 0}</h1>
            <p>{title ?? 0}</p>
        </div>
    )
}

export default SubCard

export const UserCard = ({title, firstName, lastName, picture}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold underline">{title}
            {firstName}
            {lastName}
            </h2>
            <img src={picture} alt="" />
        </div>
    )
}


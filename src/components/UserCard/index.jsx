

export const UserCard = ({title, firstName, lastName, picture, onClick}) => {
    const fullName = `${firstName} ${lastName}`
    return (
        <div onClick={onClick} className="flex items-center bg-purple-300 rounded-lg p-4 m-2 card " >
            <img width="72" className="rounded-full mr-4"  src={picture} alt={`Profile photo for ${fullName}`} />
            <h2 className="text-3xl font-bold underline">{title}{" "}
            {fullName}
            </h2>
        </div>
        
    )
    
}

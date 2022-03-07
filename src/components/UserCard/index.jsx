
export const UserCard = ({title, firstName, lastName, picture}) => {
    const fullName = `${firstName} ${lastName}`
    return (
        <div className="flex items-center bg-purple-300 rounded-lg p-4 m-2">
            <img className="rounded-full"  src={picture} alt={`Profile photo for ${fullName}`} />
            <h2 className="text-3xl font-bold underline">{title}
            {fullName}
            </h2>
        </div>
        
    )
    
}

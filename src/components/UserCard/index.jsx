
export const UserCard = ({title, firstName, lastName, picture}) => {
    const fullName = `${firstName} ${lastName}`
    return (
        <div className="flex items-center">
            <img src={picture} alt={`Profile photo for ${fullName}`} />
            <h2 className="text-3xl font-bold underline">{title}
            {fullName}
            </h2>
            
        </div>
        
    )
    
}

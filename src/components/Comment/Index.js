export const CommentCard ( props ) => {
    const { ownwer, message, likes } = props
    return (
    <div>
        <div className='comCard'>
            <h3>{ownwer}</h3>
            <span>{message}</span>
            <tag /> <span className="fas fa-heart">{likes}</span>
        </div>
    </div>
    )
}
export const CommentCard ( props ) => {
    const { ownwer, message, likes } = props
    const commentLikes = `${likes}`
    return (
    <div>
        <div className='commentCard'>
            <h3>{ownwer}</h3>
            <span>{message}</span>
            <tag></tag>
            <span className="fas fa-heart">{commentLikes}</span>
        </div>
    </div>
    ) 
}
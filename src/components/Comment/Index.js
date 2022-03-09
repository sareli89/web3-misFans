export const CommentCard ({ownwer, publishDate}) => {
    return (
    <div>
        <div className='comCard'>
            <h3>{ownwer}</h3>
            <span>{publishDate}</span>
            <tag />
        </div>
    </div>
    )
}
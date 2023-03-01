export const PostMetaData = (props) =>{
    return(
        <>
        <p className={`blog-post-meta ${ props.hidden ? 'hidden':''}`} >January 1, 2021 by Carlos </p>
        <hr />
        </>
    )
}
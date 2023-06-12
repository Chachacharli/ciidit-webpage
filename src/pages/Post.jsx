import React, { useEffect } from "react"
import postlist from "../posts.json"
import { Link, redirect } from "react-router-dom"
import { useParams } from "react-router-dom"
import Markdown from "markdown-to-jsx"
import { Footer } from "../components/Footer/Footer"


const Bradcum = ({title}) => {
    return(
            <>
                <nav className="my-3" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <Link to={'/'} class="breadcrumb-item active" aria-current="page">Home</Link>
                        <li class="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>          
                <br/>
            </>
    )
}

const PostLink = ({title, id}) => {
    return(
        <Link to={`/Blog/${id}`} style={{color: 'white'}} className="post-link list-group-item text-ligth bg-dark border-0">{title}</Link>
    )
}

const SiderBarpost = () => {
    return(
        <nav className="col-md-4">
        <div style={{minHeight: '300px'}} className="sidebar bg-dark text-ligth rounded min-height-50 p-3">
                <h4 className="text-white">Ultimas entradas</h4>
                <ul className="list-group rounded text-ligth">
                    {postlist.map((post,i)=>{
                        return(<PostLink title={post.title} id={post.id}/>)
                    })}
                </ul>
                </div>
        </nav>
    )
}

//MARKDOWN COMPONENTES

const ParrafoPost = ({children}) =>{
    return(
        <div className="w-100 d-flex aling-items-center justify-content-center">
            <p style={{textAlign: 'justify'}} className="">
            {children}  
            </p>            
        </div>

    )
}



const BodyPost = ({title, author, date, content}) => {
    return(
<div className="col-md-8 bg-white rounded p-3">        
        <div className="post">
            <h2>{title}</h2>
            <small>Published on {date} por {author}</small>
            <hr/>
            <Markdown options={
                {
                    overrides:
                    {
                        p: ParrafoPost ,
                    }
                }
                }>{content}</Markdown>
        </div>        
</div>
    )
}

const Post = (props) => {
    const params = useParams()
    const validId = parseInt(params.id)

    if(!validId){
        return redirect('/')
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })    

    const ejemplo = '# Hola, esto es un ejemplo de Markdown'
    return (
    <>
    <section style={{minHeight: "100vh" }} className="section my-2">
        <div className="container"> 
            <Bradcum title={fetchedPost.title}/>
            <div className="row">
                <BodyPost 
                title={fetchedPost.title} 
                author={fetchedPost.author}
                date={fetchedPost.date}
                content={fetchedPost.content}/>
                <SiderBarpost></SiderBarpost>
            </div>
        </div>
    </section>
    <Footer></Footer>
    </>

    )
}

export default Post
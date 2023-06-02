import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Footer } from "../components/Footer/Footer";
import VolverAHome from "../components/LineaTemplate/VolverAHome";


const Post = () => {

    let filez
    
    filez = require('../posts/files.json')
    
    const [postContent, setPostContent] = useState("")

    useEffect(()=> {
        import('../posts/first.md')
        .then(res => {
            fetch(res.default)
            .then(response => response.text())
            .then(respons => setPostContent(respons))
            .catch(err => console.log(err))
        })
    },[])


    const Div = ({children}) => {
        return(
            <div>
                <h1>{children}</h1> 
            </div>
        )
    }

    const Parrafo = ({children}) => {
        return(
            <p className="my-3">{children}</p>
        )
    }
    return(
        <>
      
        <section className="section-linea-investigacion">
        <br />


        <main className='main-article-container'>
            <VolverAHome></VolverAHome>
            <article className='container'>    

                <div className="row g-5">
                    <div className="img-article-container">                        
                    </div>
                    
                    <div className="col-md-8 min-vh-100">   
                    <Markdown
                        options={{
                            overrides: {
                                h1: {
                                    component: Div
                                },
                                p: {
                                    component: Parrafo
                                }
                            }
                        }}>
                        {postContent}
                    </Markdown>

                    </div>
                        
                </div>

            </article>

        </main>


        <Footer></Footer>

        </section>
        </>    

    )
}

export default Post;
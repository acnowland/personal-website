import React from 'react'
import sanityClient from '../Client'
import { useState, useEffect } from 'react'
import '../css/PostsPage.css'
import { Link } from 'react-router-dom'



const Posts = () => {

    const [postData, setPost] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then(data => setPost(data))
    }, [])

    return (
        <main className='post-page-container'>
            <div className='top-filler'>

            </div>
            
            <div className='title-card-container'>

                
                <div className='card-container'>
                    <div className='all-cards'>
                        <h1>Blog Posts!</h1>
                        {postData && postData.map(post => {
                            return <article className='blog-card' key={post.slug.current}>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span >
                                    <img className='post-image' src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                                    <span className='post-title'>
                                        <h3>
                                            {post.title}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                        })}
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Posts

import React from 'react'
import '../css/SinglePost.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import sanityClient from '../Client'
import BlockContent from '@sanity/block-content-to-react'

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams(); 

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            author->{
                name,
                image{
                    asset->{
                        url
                    }
                },
                bio[0]{
                    children[0]{
                        text
                    }
                }
            }
            
        }`) 
        .then(data => setSinglePost(data[0]))
        .catch(console.error)

    }, [slug])


    return (
        !singlePost ? <div>Loading...</div> :
        <main className='post-page-container'>
            <div className='top-filler'>

            </div>
        
            <div className='title-card-container'>
                <div className='single-post-container'>
                        <div className='post-container'>
                            {!singlePost ? <h1 className='loading-screen'>Loading..</h1> :
                            <>
                                <h1>{singlePost.title}</h1>
                                
                                <div className='post-body-container'>
                                    <BlockContent className='blog-content' blocks={singlePost.body} projectId='89lcki6p' dataset='production'/>

                                </div>
                            </>
                            
                            }


                        </div>

                </div>
            </div>
    </main>

    )
}

export default SinglePost

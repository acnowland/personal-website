import React from 'react'
import sanityClient from '../Client'
import { useState, useEffect } from 'react'


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
        <div>
            <h1>blog post page</h1>
        </div>
    )
}

export default Posts

import sanityClient from '@sanity/client'


export default sanityClient({
    projectId: "89lcki6p", 
    dataset: "production",
    useCdn: true
})

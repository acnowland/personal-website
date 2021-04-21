export default{
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"

        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "image",
            title: "Project Image",
            type: "image",
            options:{
                hotspot: true
            }

        },
        {
            name: "url",
            title: "URL",
            type: "url"
        }


    ]
}
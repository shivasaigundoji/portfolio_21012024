export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
            {
            name: 'project',
            title: 'Project',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'techused',
            title: 'Tech_used',
            type: 'array',
            of: [{type: 'string'}]

        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url'
        },
        {
            name: 'githubLink',
            title: 'Github Link',
            type: 'url'
        },

        {
            name:'isDone',
            title: 'Is Done',
            type: 'boolean',
            initialValue: false,
        }
    ]

}
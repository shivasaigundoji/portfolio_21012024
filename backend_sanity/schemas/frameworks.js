export default {
    name: 'frameworks',
    title: 'Frameworks & Libraries',
    type: 'document',
    fields: [
        {
            name: 'name',
            title:'Name',
            type: 'string',
        },
        {
            name: 'imgurl',
            title:'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'level',
            title:'Level',
            type: 'number',
        },
    ]
}
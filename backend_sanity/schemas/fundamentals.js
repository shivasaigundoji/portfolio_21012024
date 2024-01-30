export default {
    name: 'fundamentals',
    title: 'Fundamental Skills',
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
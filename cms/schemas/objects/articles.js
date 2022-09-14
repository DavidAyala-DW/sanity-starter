export default {
  type: 'object',
  name: 'articles',
  title: 'Articles',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "description",
      type: 'text',
      title: "Description",
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of:[
        {type: "article"}
      ]
      
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'articles.0.article.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Articles',
        media,
      }
    },
  },
}

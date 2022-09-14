export default {
  type: 'object',
  name: 'article',
  title: 'Article',
  fields: [
    {
      name: 'article',
      title: "Article",
      type: 'reference',
      to: [
        {type: "blog"}
      ]
    },
  ],
  
  preview: {
    select: {
      media: 'article.image',
      title: 'article.title'
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Article',
        media,
      }
    },
  },
}

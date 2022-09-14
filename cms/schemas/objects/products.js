export default {
  type: 'object',
  name: 'products',
  title: 'Products',
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
      name: 'products',
      title: 'Products',
      type: 'array',
      of:[
        {type: "singleProduct"}
      ]
      
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'products.0.product.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Products',
        media,
      }
    },
  },
}

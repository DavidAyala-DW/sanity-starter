export default {
  type: 'object',
  name: 'singleProduct',
  title: 'Product',
  fields: [
    {
      name: 'product',
      title: "Product",
      type: 'reference',
      to: [
        {type: "product"}
      ]
    },
  ],
  
  preview: {
    select: {
      media: 'product.image',
      title: 'product.title'
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Product',
        media,
      }
    },
  },
}

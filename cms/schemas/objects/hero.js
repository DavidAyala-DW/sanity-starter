export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'backgroundImage',
      type: 'backgroundImage',
      title: "image"
    },
  ],
  preview: {
    select: {
      media: 'backgroundImage.image',
    },
    prepare({ media }) {
      return {
        title: "Hero",
        subtitle: 'Hero',
        media,
      }
    },
  },
}

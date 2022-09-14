export default {
  type: 'object',
  name: 'textContentCenter',
  title: 'Text content centered',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "description",
      title: "Description",
      type: 'simplePortableText',
    },
    {
      name: "links",
      type: "links"
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text content centered',
      }
    },
  },
}

import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'arrayLinks' },
        { type: 'articles' },
        { type: 'products' },
      ],
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

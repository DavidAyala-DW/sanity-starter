import { ImageIcon } from '@sanity/icons'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  icon: ImageIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'articlePage', title: 'Article page' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: "general"
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 180,
      },
      group: "general"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      group: "general"
    },
    {
      name: 'summary',
      type: 'simplePortableText',
      title: 'Summary',
      group: "general"
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'space' },
        { type: 'textContentCenter' },
        { type: 'articles' },
      ],
      group: "articlePage"
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

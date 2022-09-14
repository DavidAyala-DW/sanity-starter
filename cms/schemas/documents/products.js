import { PackageIcon } from '@sanity/icons'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  icon: PackageIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: 'summary',
      type: 'simplePortableText',
      title: 'Summary',
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: "image"
    },
    prepare({ title, media }) {
      return {
        title,
        media
      }
    },
  },
}

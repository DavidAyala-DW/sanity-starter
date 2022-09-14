export default {
  title: 'Background image',
  name: 'backgroundImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Desktop',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageMobile',
      type: 'image',
      title: 'Mobile',
      description:
        'Optional. Providing an alternate crop for tablet & phone screens can improve performance. Portrait dimensions work best here.',
      options: {
        hotspot: true,
      },
    },
  ],
}

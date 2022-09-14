export default {
  type: 'object',
  name: 'links',
  title: 'Link',
  fields: [
    {
      title: "Select the type of link",
      description:
        "External links go to other websites using the format `https://www.google.com`. Internal links are restricted to other pages in the SANITY database.",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "External", value: "external" },
          { title: "Internal", value: "internal" },
        ],
        layout: "radio",
      },
      initialValue: "internal"
    },
    {
      name: 'link',
      title: 'Internal link',
      type: 'reference',
      to: [
        {type: 'route'},
      ],
      hidden: ({ parent }) => parent?.linkType !== "internal", // hidden if link type is not internal
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
    },
    {
      name: "title",
      type: "string",
      title: 'Title'
    },
  ]
}

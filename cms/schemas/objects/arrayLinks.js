
export default {
  type: 'object',
  name: 'arrayLinks',
  title: 'Links list',
  fields: [
    {
      name: 'list',
      title: 'Link list',
      type: 'array',
      of:[
        {
          type: "object",
          title: "Child Links",
          fields: [
            {
              name: "childlinks",
              type: "array",
              of:[
                {type: "links"}
              ]
            }
          ]
        }
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Link list",
      }
    },
  },
}

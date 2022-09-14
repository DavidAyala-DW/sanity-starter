import { ExpandIcon } from '@sanity/icons'

export default {
  name: 'space',
  title: 'Space between sections',
  type: 'object',
  icon: ExpandIcon,
  fields: [
    {
      name: 'heightDesktop',
      title: 'Define space (Desktop)',
      type: 'number',
    },
    {
      name: 'heightTablet',
      title: 'Define space (Tablet)',
      type: 'number',
    },
    {
      name: 'heightMobile',
      title: 'Define space (Mobile)',
      type: 'number',
    },
  ],
  preview: {
    select: {
      heightDesktop: 'heightDesktop',
      heightMobile: 'heightMobile',
      heightTablet: 'heightTablet'
    },
    prepare({
      heightDesktop,
      heightTablet,
      heightMobile}) {
      return {
        title: "Space between sections",
        subtitle: `
        desktop: ${heightDesktop}px,
        tablet: ${heightTablet ?? heightDesktop}px and
        mobile: ${heightMobile}px `,
      }
    },
  },
}

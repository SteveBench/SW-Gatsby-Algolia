export default {
  type: 'object',
  name: 'swcomponent',
  title: 'Swcomponent',
  fields: [
    {
      name: 'facets',
      type: 'string',
      title: 'Facets'
    },
    {
      name: 'numberOfProducts',
      type: 'string',
     
    },
    // {
    //   name: 'tagline',
    //   type: 'simpleBlockContent'
    // },
    // {
    //   name: 'illustration',
    //   type: 'illustration'
    // },
    // {
    //   name: 'cta',
    //   type: 'cta'
    // }
  ],
  preview: {
    select: {
      title: 'facets',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Search: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}

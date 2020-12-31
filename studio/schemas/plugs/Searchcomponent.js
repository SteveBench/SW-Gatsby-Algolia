export default {
  type: 'object',
  name: 'searchcomponent',
  title: 'Searchcomponent',
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
    {
      name: 'title',
      type: 'string',
     
    },
    {
      name:'carousel',
      type:'boolean',
      description: 'Set this to show a carousel of products',
    },
    {
      name:'showHeader',
      type:'boolean',
      description: 'Show refinements',
    },
    {
      name:'showPagination',
      type:'boolean',
      description: 'Show paginataion',
    },
    {
      name:'showSearch',
      type:'boolean',
      description: 'Show searchbar',
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
        title: `Searchcomponent: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}

export default {
  type: 'object',
  name: 'infoRows',
  title: 'Info rows',
  fields: [
    {
      type: 'boolean',
      name: 'carousel'
    },
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'textWithIllustration' }]
    }
  ]
}

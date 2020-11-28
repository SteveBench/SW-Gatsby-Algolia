export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc2be31b5d07e16c9d86d7c',
                  title: 'Sanity Studio',
                  name: 'sw-gatsby-algolia-studio',
                  apiId: '9d10b1a8-dd90-4208-9fce-0a5968391fb9'
                },
                {
                  buildHookId: '5fc2be309ad37b1347257ee1',
                  title: 'Blog Website',
                  name: 'sw-gatsby-algolia',
                  apiId: '8308948d-999c-4c8d-b6cd-6736d1fc7b78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SteveBench/SW-Gatsby-Algolia',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sw-gatsby-algolia.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

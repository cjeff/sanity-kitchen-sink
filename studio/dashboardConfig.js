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
                  buildHookId: '60d690b77985042e93c398f0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nhq6miw1',
                  apiId: '2fef1060-b99a-4a66-b858-f92619175cb9'
                },
                {
                  buildHookId: '60d690b72a97bc332cf57567',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g49mjjgr',
                  apiId: 'bf5727a9-2b8d-4c60-b911-cf3c685d15f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cjeff/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g49mjjgr.netlify.app', category: 'apps'}
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

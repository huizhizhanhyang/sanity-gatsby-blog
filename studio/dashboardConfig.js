export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d0432d55ec09b018bd31925',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nwqbjzym',
                  apiId: '4c88cc77-ee43-4b70-a1f5-8caf2a6748e6'
                },
                {
                  buildHookId: '5d0432d5f2f93d0175360272',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rydzdkga',
                  apiId: '04bd2ce8-4f45-4d72-9525-23285502f4d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huizhizhanhyang/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rydzdkga.netlify.com', category: 'apps'}
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

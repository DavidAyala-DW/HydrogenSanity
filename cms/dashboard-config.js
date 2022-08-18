export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '62fe6cd40cb12a069d6a61be',
                  title: 'Website',
                  name: 'hydrogen-sanity-david',
                  apiId: '3fe2af17-5f0e-4c89-b8be-b50245c4e889',
                },
              ],
            },
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ],
}

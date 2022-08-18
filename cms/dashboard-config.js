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
                  buildHookId: '62be0e22093a22184965b91f',
                  title: 'Website',
                  name: 'remedy-place',
                  apiId: '5715d4a4-260e-48ea-8973-ed6d93dfbc0b',
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

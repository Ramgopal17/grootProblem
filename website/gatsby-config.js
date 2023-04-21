const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Smooth DOC',
        siteUrl: 'https://altrasonictest.netlify.app/',
        description: 'Ready to use documentation theme for Gatsby.',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Greg Bergé',
        sections: ['About', 'Guide', 'Components', 'Reference'],
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: 'neoziro',
        githubRepositoryURL: 'https://github.com/Ramgopal17/grootProblem',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          appId: 'OK3WSC4AQV',
          apiKey: '16fac991514ce7ee7978b5562bcd3bde',
          indexName: 'altrasonictest',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}

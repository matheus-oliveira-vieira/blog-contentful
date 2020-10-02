module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'scd72cvy7t3e',
        accessToken: 'miSSRJtltvkCCYDn-mRnI1UT4s5SvmN2pY4alh6aYSU',
        downloadLocal: true
      }
    },
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark'
  ]
}
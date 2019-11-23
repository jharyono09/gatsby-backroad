module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: "Explore awesome worlwide",
    author: "@joniharyono",
    data: ["item1", "item2"],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
